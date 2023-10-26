import CardOne from "../Ui/CardOne";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Athletics.module.css";

const Athletics = () => {
  const data = [
    {
      img: "images/athletics1.png",
      title: "Student Life",
      message:
        "The Cardinal has produced at least one medalist in every Olympics in which the U.S. has competed since 1912, totaling 2",
      linkMsg: "Student affairs",
    },
    {
      img: "images/athletics2.png",
      title: "Art & Culture",
      message:
        "The Cardinal has produced at least one medalist in every Olympics in which the U.S. has competed since 1912, totaling 2",
      linkMsg: "Student affairs",
    },
    {
      img: "images/athletics3.png",
      title: "Recreation and Wellness",
      message:
        "The Cardinal has produced at least one medalist in every Olympics in which the U.S. has competed since 1912, totaling 2",
      linkMsg: "Student affairs",
    },
    {
      img: "images/athletics4.png",
      title: "Art & Culture",
      message:
        "The Cardinal has produced at least one medalist in every Olympics in which the U.S. has competed since 1912, totaling 2",
      linkMsg: "Student affairs",
    },
  ];

  //   const styling = {styles.campusLife}
  const myData = data.map((each, ind) => (
    <CardOne each={each} styling={styles.athleticsCard} index={ind} />
  ));
  return (
    <Wrapper classes={styles.athletics} id="athletics">
      <HeroSectioncard
        title="Athletics"
        message="Providing student-athletes the opportunity to achieve excellence both in competition and in the classroom"
      ></HeroSectioncard>
      <div className={styles.athleticsCards}>{myData}</div>
    </Wrapper>
  );
};

export default Athletics;
