import React from "react";
import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Events.module.css";
const id = "events";
const Events = () => {
  const title = "Upcoming Events";
  const btnText = "More events";
  const eventsData = [
    {
      img: "images/event1.png",
      eventTitle: "CLASS/SEMINAR",
      eventText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
    {
      img: "images/event2.png",
      eventTitle: "CLASS/SEMINAR",
      eventText:
        "Clinical and Firearms: A Curriculum on Firearm Injury Prevention In Medical Practice",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
    {
      img: "images/event3.png",
      eventTitle: "lorem ipsum  ",
      eventText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
    {
      img: "images/event4.png",
      eventTitle: "lorem ipsum  ",
      eventText:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      time: "9:00 Am CT",
      date: { month: "july", day: "04" },
    },
  ];
  const dataArr = eventsData.map((each, i) => {
    const key = Number(i + 1);
    return (
      <li
        key={key}
        className={
          key === 2 || key === 3 ? styles.eventCardSmall : styles.eventCardBig
        }
      >
        <div className={styles.imgDiv}>
          <img src={each.img} alt="" />
        </div>

        <div className={styles.event}>
          <h4>{each.eventTitle}</h4>
          <h6>{each.eventText}</h6>
          <p>{each.time}</p>
        </div>

        <div className={styles.dateDiv}>
          <p>{each.date.month.slice(0, 3)}</p>
          <span>
            {+each.date.day < 10 ? ` 0${+each.date.day}` : `${+each.date.day}`}
          </span>
        </div>
      </li>
    );
  });
  return (
    <Wrapper classes={styles.events} id={id}>
      <HeroSectioncard title={title} />
      <ul className={styles.eventCards}>{dataArr}</ul>
      <Button text={btnText} />
      <div className={styles.eventLastImg}>
        <img src="images/event-Bg.png" alt="" />
      </div>
    </Wrapper>
  );
};

export default Events;
