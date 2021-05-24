import styles from "./Progress.module.css";
export default function Progress({ progress }: { progress: number }) {
  return (
    <div className={styles.progress}>
      <div className={styles.determinate} style={{ width: `${progress}%` }}></div>
    </div>
  );
}
