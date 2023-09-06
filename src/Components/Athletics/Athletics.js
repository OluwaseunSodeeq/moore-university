import CardOne from "../CardOne";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Athletics.module.css";

const Athletics = () => {
  const data = [
    {
      img: "images/Admission.png",
      title: "Student Life",
      message:
        "Experience an unparalleled campus life at our institution, where vibrant activities, diverse communities, and unforgettable memories await you throughout your academic journey",
      linkMsg: "Student affairs",
    },
    {
      img: "images/Admission.png",
      title: "Art & Culture",
      message:
        "A rich tradition of fostering creativity and a vibrate arts districts on campus.",
      linkMsg: "Student affairs",
    },
    {
      img: "images/Admission.png",
      title: "Recreation and Wellness",
      message:
        "State-of-the-art facilities and fitness programs to encourage movement and play",
      linkMsg: "Student affairs",
    },
    {
      img: "images/Admission.png",
      title: "Art & Culture",
      message:
        "A rich tradition of fostering creativity and a vibrate arts districts on campus.",
      linkMsg: "Student affairs",
    },
  ];

  //   const styling = {styles.campusLife}
  const myData = data.map((each, ind) => (
    <CardOne each={each} styling={styles.athleticsCard} index={ind}></CardOne>
  ));
  return (
    <Wrapper classes={styles.athletics}>
      <HeroSectioncard
        title="Athletics"
        message="Providing student-athletes the opportunity to achieve excellence both in competition and in the classroom"
      ></HeroSectioncard>
      <div className={styles.athleticsCards}>{myData}</div>
    </Wrapper>
  );
};

export default Athletics;
