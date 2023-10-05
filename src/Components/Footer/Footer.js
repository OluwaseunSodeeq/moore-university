import Logo from "../Nav/Logo";
import Wrapper from "../Ui/Wrapper";
import styles from "./Footer.module.css";

const headerList = [
  "Moore Home",
  "Maps & Direction",
  "Search Moore",
  "Emergency Info",
];
const bodyList = [
  "Terms of use",
  "Privacy",
  "Copyrights",
  "Trademark",
  "Non-Discrimination",
  "Accessibility",
];
const Footer = () => {
  return (
    <Wrapper classes={styles.footer}>
      <div className={styles.footerContainer}>
        <Logo />
        <Right />
      </div>
    </Wrapper>
  );
};
function Right() {
  return (
    <div className={styles.footerRight}>
      <ul>
        {headerList.map((each) => (
          <li className={styles.headerList} key={each}>
            {each}
          </li>
        ))}
      </ul>
      <ul>
        {bodyList.map((each) => (
          <li className={styles.bodyList} key={each}>
            {each}
          </li>
        ))}
      </ul>
      <p>©Copyright Stanford University. Stanford, California 94305.</p>
    </div>
  );
}
export default Footer;
