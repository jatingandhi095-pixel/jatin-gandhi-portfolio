import { UnderwaterScene } from "@/components/prototype/into-the-unknown/underwater-scene";
import styles from "./page.module.css";

export default function PrototypeIntoTheUnknownPage() {
  return (
    <main className={styles["prototype-unknown"]}>
      <UnderwaterScene />
    </main>
  );
}
