// import { Link } from "react";
import React from "react";
import CardOne from "../Ui/CardOne";
import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Academics.module.css";
const id = "academics";
const Academics = () => {
  const title = "Academics";
  const message =
    "Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world";
  const data = [
    {
      img: "images/academics1.png",
      title: "UNDERGRADUATE EDUCATION",
      message:
        "Unsurpassed oppourtunities to participate in the advancement  of entire fields of knowledge",
      linkMsg: "Undergraduate Education ",
    },
    {
      img: "images/academics2.png",
      title: "DRIVING IMPACT",
      message:
        "Continue adult education, executive and professionals programs, and programs for k-12 students",
      linkMsg: "Undergraduate Education  ",
    },
    {
      img: "images/academics3.png",
      title: "GRADUATE EDUCATION",
      message:
        "Unsurpassed oppourtunities to participate in the advancement  of entire fields of knowledge",
      linkMsg: "Graduate Education",
    },
  ];

  const myData = data.map((each, ind) => (
    <CardOne
      each={each}
      key={ind}
      styling={styles.academicsCard}
      index={ind}
    ></CardOne>
  ));
  const buttonData = [
    "Medicine",
    "Law",
    "Education",
    "Humanities",
    "Engineering",
    "Sustainbility",
    "Business",
  ];
  const academicsbuttonsData = buttonData.map((each, i) => (
    <button className={styles.btn} key={i + 1}>
      {each}
    </button>
  ));
  const btnText = "More about academics";
  return (
    <Wrapper classes={styles.academics} id={id}>
      <HeroSectioncard title={title} message={message}></HeroSectioncard>
      <div className={styles.academicsCards}>{myData}</div>
      <p>
        Pursue your passions and achieve your dreams, at our 7 inspiring
        schools.
      </p>
      <div className={styles.academicsHero}>
        <div className={styles.academicsHeroDiv}>{academicsbuttonsData}</div>
      </div>
      <div className={styles.acdemicsBtn}>
        <Button text={btnText} />
      </div>
    </Wrapper>
  );
};

export default Academics;
