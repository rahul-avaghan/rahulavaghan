
import styles from './Avatar.module.css';

export default function ProfilePicture() {
  return (
    <picture className={styles.avatar}>
      <source srcSet="rahul.jpeg" />
      <img src="/rahul.jpeg" />
    </picture>
  );
}
