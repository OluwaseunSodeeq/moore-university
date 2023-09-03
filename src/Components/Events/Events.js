import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Events.module.css";

const Events = () => {
  const title = "Upcoming Events";
  const btnText = "More events";
  const eventsData = [
    {
      img: "images/Admission.png",
      eventTitle: "CLASS/SEMINAR",
      eventText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
    {
      img: "images/Admission.png",
      eventTitle: "CLASS/SEMINAR",
      eventText:
        "Clinical and Firearms: A Curriculum on Firearm Injury Prevention In Medical Practice",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
    {
      img: "images/Admission.png",
      eventTitle: "lorem ipsum  ",
      eventText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
    {
      img: "images/Admission.png",
      eventTitle: "lorem ipsum  ",
      eventText:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
  ];
  const dataArr = eventsData.map((each, i) => (
    <li className={styles.eventCard} key={i + 1}>
      <div className={styles.imgDiv}>
        <img src={each.img} alt="" />
      </div>
      <div className={styles.event}>
        <h4>{each.eventTitle}</h4>
        <h6>{each.eventText}</h6>
        <p>{each.time}</p>
      </div>
      <div className={styles.dateDiv}>
        <p>{each.date.month}</p>
        <span>{each.date.day}</span>
      </div>
    </li>
  ));
  return (
    <Wrapper classes={styles.events}>
      <HeroSectioncard title={title} />
      <ul className={styles.eventCards}>{dataArr}</ul>
      <Button text={btnText} />
      <div className={styles.EventLastImg}>
        <img src="images/Admission.png" alt="" />
      </div>
    </Wrapper>
  );
};

export default Events;
