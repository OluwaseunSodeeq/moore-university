import Card from "../Ui/Card";
import HeroSectioncard from "../Ui/HeroSectionCard";
import styles from "./Campus.module.css";
import CampusCard from "./CampusCard";
const Campus = () => {
  const data = {
    title: "Campus",
    message: "Stories about people, research, and innovation across the farm",
  };
  return (
    <Card classes={styles.currentContainer}>
      <HeroSectioncard title={data.title} message={data.message} />
      <CampusCard />,{" "}
    </Card>
  );
};

export default Campus;
