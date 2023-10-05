import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Campus.module.css";
import CampusCard from "./CampusCard";

const Campus = () => {
  const data = {
    title: "Campus News",
    message: "Stories about people, research, and innovation across the farm",
  };
  const buttonStyle = "mainButton";
  const text = "More Campus News";
  return (
    <Wrapper classes={styles.currentContainer}>
      <HeroSectioncard title={data.title} message={data.message} />
      <CampusCard />
      <Button text={text} buttonStyle={buttonStyle} />
    </Wrapper>
  );
};

export default Campus;
