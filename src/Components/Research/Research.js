import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Research.module.css";
const id = "research";
const Research = () => {
  const title = "Research";
  const message =
    "Driving discoveries vital to our world, our health, and our intellectual life";
  const researchData = [
    { data: "15 institutes", text: "Cross disciplinary boundaries " },
    { data: "20 Libraries", text: "Hold over 12 million items " },
    { data: "$1.82 Billion", text: "Sponsored research budget" },
  ];
  const dataArr = researchData.map((each, i) => (
    <div className={styles.researchCard} key={i + 1}>
      <h4>{each.data}</h4>
      <p>{each.text}</p>
    </div>
  ));
  const btnText = "More about research";

  return (
    <Wrapper classes={styles.research} id={id}>
      <HeroSectioncard title={title} message={message}></HeroSectioncard>
      <div className={styles.researchBg}>
        <div className={styles.dataArr}>{dataArr}</div>
        <Button text={btnText} />
      </div>
    </Wrapper>
  );
};

export default Research;
