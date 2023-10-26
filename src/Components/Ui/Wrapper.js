import styles from "./Card.module.css";
const Wrapper = (props) => {
  return (
    <section className={`${styles.wrapper} ${props.classes}`} id={props.id}>
      {props.children}
    </section>
  );
};

export default Wrapper;
