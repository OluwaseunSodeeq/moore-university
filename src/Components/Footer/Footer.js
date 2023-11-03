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
      <div className={styles.footerContainerMain}>
        <div className={styles.footerContainer}>
          <Logo />
          <Right />
        </div>
        <div className={styles.paragraphs}>
          <p>©Copyright Stanford University. Stanford, California 94305.</p>
          <p>Designed by Jimoh Abdul-Gafar, Coded by Oluwaseun Sodeeq.</p>
          <p>© Oct, 2023.</p>
        </div>
      </div>
    </Wrapper>
  );
};
function Right() {
  return (
    <div className={styles.footerRight}>
      <div className={styles.miniRight}>
        <ul>
          {headerList.map((each) => (
            <li className={styles.headerList} key={each}>
              {each}
            </li>
          ))}
        </ul>
        <ul className={styles.bodyList}>
          {bodyList.map((each) => (
            <li className={styles.bodyList} key={each}>
              {each}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Footer;
