"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./underwater-scene.module.css";

type Destination = {
  id: string;
  name: string;
  label: string;
  description: string;
  href: string;
  position: { left: string; top: string };
};

const destinations: Destination[] = [
  {
    id: "wreck",
    name: "THE WRECK",
    label: "Selected Work",
    description: "Beside — Used Car Risk Detection — Shaolin Temple India",
    href: "/work/beside-case-study",
    position: { left: "18%", top: "32%" },
  },
  {
    id: "observatory",
    name: "THE OBSERVATORY",
    label: "About",
    description: "Introduction — Design interests — Skills and tools — Learning journey",
    href: "/about",
    position: { left: "40%", top: "18%" },
  },
  {
    id: "coves",
    name: "HIDDEN COVES",
    label: "Experiments",
    description: "Interaction experiments — Motion studies — Visual explorations",
    href: "/experiments",
    position: { left: "63%", top: "36%" },
  },
  {
    id: "surface",
    name: "THE SURFACE",
    label: "Contact",
    description: "Email — LinkedIn — Résumé",
    href: "/contact",
    position: { left: "76%", top: "58%" },
  },
];

const bubbles = [
  { left: "18%", top: "64%", size: 14 },
  { left: "30%", top: "72%", size: 9 },
  { left: "45%", top: "76%", size: 12 },
  { left: "58%", top: "66%", size: 16 },
  { left: "80%", top: "80%", size: 10 },
];

export function UnderwaterScene() {
  const [activeId, setActiveId] = useState("wreck");
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    setHasWebGL(Boolean(context));

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setPointer({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const activeDestination = useMemo(
    () => destinations.find((destination) => destination.id === activeId) ?? destinations[0],
    [activeId],
  );

  return (
    <div className={styles["prototype-scene"]} aria-label="Underwater environment">
      {!mounted && (
        <div className={styles["prototype-loader"]} aria-live="polite">
          Loading ocean...
        </div>
      )}

      {!hasWebGL && (
        <div className={styles["prototype-fallback"]} aria-live="polite">
          WebGL is unavailable in this browser, so the underwater environment is running in a
          simplified fallback mode.
        </div>
      )}

      <motion.div
        className={styles["camera-drift"]}
        animate={{ x: pointer.x * 18, y: pointer.y * 14 }}
        transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.8 }}
      >
        <div className={styles["scene-haze"]} />
        <div className={styles["light-beam"]} />
        <div className={styles["ocean-floor"]} />
      </motion.div>

      {bubbles.map((bubble, index) => (
        <button
          key={`${bubble.left}-${bubble.top}`}
          type="button"
          className={styles.bubble}
          aria-label="Ambient bubble"
          style={{
            left: bubble.left,
            top: bubble.top,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${index * 0.5}s`,
          }}
        />
      ))}

      <nav className={styles["destination-menu"]} aria-label="Persistent destination menu">
        {destinations.map((destination) => (
          <button
            key={destination.id}
            type="button"
            className={activeId === destination.id ? styles["is-active"] : ""}
            onClick={() => setActiveId(destination.id)}
            aria-pressed={activeId === destination.id}
          >
            {destination.name}
          </button>
        ))}
      </nav>

      {destinations.map((destination) => (
        <button
          key={destination.id}
          type="button"
          className={`${styles["destination-marker"]} ${activeId === destination.id ? styles["is-active"] : ""}`}
          style={{ left: destination.position.left, top: destination.position.top }}
          onClick={() => setActiveId(destination.id)}
          aria-label={`Select ${destination.name}`}
        >
          <span>{destination.name}</span>
        </button>
      ))}

      <motion.aside
        key={activeDestination.id}
        className={styles["destination-panel"]}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <p className={styles.eyebrow}>{activeDestination.label}</p>

        {activeDestination.id === "wreck" && (
          <div className={styles["project-preview"]}>
            <span>Project preview</span>
            <strong>Beside</strong>
          </div>
        )}

        <h1>{activeDestination.name}</h1>
        <p>{activeDestination.description}</p>

        <div className={styles["panel-actions"]}>
          <Link href={activeDestination.href} className={styles["primary-link"]}>
            {activeDestination.id === "wreck" ? "Open Beside case study" : "Open destination"}
          </Link>

          <button
            type="button"
            className={styles["secondary-link"]}
            onClick={() => setActiveId("wreck")}
          >
            Return
          </button>
        </div>
      </motion.aside>
    </div>
  );
}
