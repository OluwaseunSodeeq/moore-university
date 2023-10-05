import styles from "./Prefooter.module.css";
const FooterButton = () => {
  const data = [
    "RESOURCES",
    "Visiting",
    "Giving",
    "Careers",
    "Faculty positions",
    "Contact",
  ];

  const buttonLists = data.map((each) => <button key={each}>{each}</button>);
  return <ul className={styles.buttonLists}>{buttonLists}</ul>;
};

export default FooterButton;
