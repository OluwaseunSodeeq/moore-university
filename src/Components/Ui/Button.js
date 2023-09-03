import styles from "./Button.module.css";

const Button = (props) => {
  //   const style = props.buttonStyle;
  return (
    <div>
      <button className={styles.mainButton}>{props.text}</button>
    </div>
  );
};

export default Button;
