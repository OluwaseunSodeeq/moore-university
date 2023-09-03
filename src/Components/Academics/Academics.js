// import { Link } from "react";
import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./Academics.module.css";

const Academics = () => {
  const title = "Academics";
  const message =
    "Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world";
  const data = [
    {
      img: "images/Admission.png",
      title: "UNDERGRADUATE EDUCATION",
      message:
        "Unsurpassed oppourtunities to participate in the advancement  of entire fields of knowledge",
      linkMsg: "Undergraduate Education ",
    },
    {
      img: "images/Admission.png",
      title: "DRIVING IMPACT",
      message:
        "Continue adult education, executive and professionals programs, and programs for k-12 students",
      linkMsg: "Undergraduate Education  ",
    },
    {
      img: "images/Admission.png",
      title: "GRADUATE EDUCATION",
      message:
        "Unsurpassed oppourtunities to participate in the advancement  of entire fields of knowledge",
      linkMsg: "Graduate Education",
    },
  ];
  const cardsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#7F2A2A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const myData = data.map((each, i) => (
    <div key={i + 1} className={styles.academicsCard}>
      <img src={each.img} alt="" />
      <h4>{each.title}</h4>
      <h6>{each.message}</h6>
      <p>
        {each.linkMsg} {cardsvg}
      </p>
    </div>
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
    <Wrapper classes={styles.academics}>
      <HeroSectioncard title={title} message={message}></HeroSectioncard>
      <div className={styles.academicsCards}>{myData}</div>
      <p>
        Pursue your passions and achieve your dreams, at our 7 inspiring
        schools.
      </p>
      <div className={styles.academicsHero}>
        <img src="images/Admission.png" alt="" />
        <div>
          <div className={styles.academicsHeroDiv}>{academicsbuttonsData}</div>
          <Button text={btnText}></Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Academics;
