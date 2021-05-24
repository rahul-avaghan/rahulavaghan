import styles from "./BlogList.module.css";
import Link from "next/link";
export default function BlogList() {
  return (
    <div>
      <h1 className="sectionHeader">Blogs</h1>
      <div className={styles.blogList}>
        <Link href="blogs/decorators-in-typescript">
          <div className={styles.blog}>
            <img src="https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"></img>
            <div className={styles.details}>
              <h3>5 Hot features of Typescript</h3>
              <p className={styles.readTime}>☕️ ☕️</p>
            </div>
          </div>
        </Link>
        <div className={styles.blog}>
          <img src="https://images.unsplash.com/photo-1583695477819-357b45d15825?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"></img>
          <div className={styles.details}>
            <h3>Decorators in Typescript</h3>
            <p className={styles.readTime}>☕️ ☕️</p>
          </div>
        </div>
      </div>
    </div>
  );
}
