import styles from './Hero.module.css';
export default function Hero() {
  return (
    <picture className={styles.heroImage}>
      <source srcSet="hero.jpg" />
      <img src="/hero.jpg" />
    </picture>
  );
}
