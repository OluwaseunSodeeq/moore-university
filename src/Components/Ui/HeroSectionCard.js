import styles from "./HeroSectionCard.module.css";
const HeroSectioncard = (props) => {
  return (
    <div className={styles.currentContainer}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default HeroSectioncard;
