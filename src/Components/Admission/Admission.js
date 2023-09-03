import Wrapper from "../Ui/Wrapper";
import HeroSectioncard from "../Ui/HeroSectionCard";
import styles from "./Admission.module.css";

const Admission = () => {
  const data = {
    title: "Admissions are now open!",
    content: "images/Admission.png",
    message: "Your pathway to success begins now! Embrace new possibilities",
  };
  return (
    <Wrapper classes={styles.currentContainer}>
      <HeroSectioncard title={data.title} message={data.message} />
      <div>
        <img src={data.content} alt={data.content.slice(7, -4)} />
      </div>
    </Wrapper>
  );
};

export default Admission;
