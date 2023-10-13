import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./AdmissionSection.module.css";

const data = [
  {
    heading:
      "Explore the possibilities of a Moore education as you map out your college journey.",
    text: "We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research, and lives.",
  },
  {
    heading:
      "Moore meets the full financial need of every admitted undergrad who qualifies for assistance.",
    text: "Nearly 80% of undergrads receive some form of financial assistance. Generally, tuition is covered for families with incomes below $150,000.",
  },
];
const AdmissionSection = () => {
  const mydata = data.map((each) => (
    <div>
      <h6>{each.heading}</h6>
      <p>{each.text}</p>
    </div>
  ));

  const img = "images/admission-bg1.png";
  return (
    <Wrapper classes={styles.admissionSection}>
      <HeroSectioncard
        title="Admission"
        message="Offering extraordinary freedom to explore, to collaborate, and to challenge yourself"
      />
      <div className={styles.admissionContent}>
        <div className={styles.imgDiv}>
          <img src={img} alt="" />
        </div>
        <div className={styles.contentDiv}>{mydata}</div>
      </div>
      <Button text="More about admission" />
    </Wrapper>
  );
};

// function MiniCard() {
//   const data = [
//     {
//       heading:
//         "Explore the possibilities of a Moore education as you map out your college journey.",
//       text: "We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research, and lives.",
//     },
//     {
//       heading:
//         "Moore meets the full financial need of every admitted undergrad who qualifies for assistance.",
//       text: "Nearly 80% of undergrads receive some form of financial assistance. Generally, tuition is covered for families with incomes below $150,000.",
//     },
//   ];
//   const mydata = data.map((each) => (
//      return (<div>
//       <h6>{each.heading}</h6>
//       <p>{each.text}</p>
//     </div>)
//   ));
//   // return <>{mydata}</>;
// }

export default AdmissionSection;
