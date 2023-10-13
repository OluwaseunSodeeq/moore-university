import CardOne from "../Ui/CardOne";
import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./CampusLife.module.css";

const CampusLife = () => {
  const title = "Campus Life";
  const message =
    "Building a vibrant community of creative and accomplished people from around the world";
  const data = [
    {
      img: "images/campusLife-Bg.png",
      title: "Student Life",
      message:
        "Experience an unparalleled campus life at our institution, where vibrant activities, diverse communities, and unforgettable memories await you throughout your academic journey",
      linkMsg: "Student affairs",
    },
    {
      img: "images/campusLife1.png",
      title: "Art & Culture",
      message:
        "A rich tradition of fostering creativity and a vibrate arts districts on campus.",
      linkMsg: "Student affairs",
    },
    {
      img: "images/campusLife2.png",
      title: "Recreation and Wellness",
      message:
        "State-of-the-art facilities and fitness programs to encourage movement and play",
      linkMsg: "Student affairs",
    },
    {
      img: "images/campusLife3.png",
      title: "Art & Culture",
      message:
        "A rich tradition of fostering creativity and a vibrate arts districts on campus.",
      linkMsg: "Student affairs",
    },
  ];

  //   const styling = {styles.campusLife}
  const myData = data.map((each, ind) => (
    <CardOne each={each} styling={styles.campusLifeCard} index={ind}></CardOne>
  ));
  const btnText = "More about campus life";
  return (
    <Wrapper classes={styles.campusLife}>
      <HeroSectioncard title={title} message={message}></HeroSectioncard>
      <div className={styles.campusCards}>{myData}</div>
      <Button text={btnText} />
    </Wrapper>
  );
};

export default CampusLife;
