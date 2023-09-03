import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./HealthCare.module.css";
const HealthCare = () => {
  const title = "Health Care";
  const message =
    "Advancing human health through renovation research, education and care";
  const img = "images/Admission.png";
  const healthCaredata = [
    {
      tittle: "Ocean’s Children's Health",
      text: "Our institution offers specialized programs for aspiring specialists in pediatric medicine, providing a nurturing environment to cultivate your expertise and passion for young patients. ",
      textt: "Moore health care",
    },
    {
      tittle: "Moore Medicine",
      text: "Expand your medical expertise as a specialist. Join our institution to advance your career and make a significant impact in the field of medicine.",
      textt: "Moore health care",
    },
    {
      tittle: "Moore Health Care",
      text: "Excel in healthcare as a specialized professional. Join our institution to enhance your skills and make a meaningful difference in the lives of patients and communities.",
      textt: "Moore health care",
    },
  ];
  const dataArr = healthCaredata.map((each, i) => (
    <div className={styles.heathCard} key={i + 1}>
      <h4>{each.tittle}</h4>
      <h6>{each.text}</h6>
      <p>{each.textt}</p>
    </div>
  ));
  const btnText = "More about health care";
  return (
    <Wrapper classes={styles.healthCare}>
      <HeroSectioncard title={title} message={message} />
      <div className={styles.heathCareHero}>
        <div className="healthCareleft">
          <img src={img} alt={img.slice(7, -4)} />
        </div>
        <div className="healthCareright">{dataArr}</div>
      </div>
      <Button text={btnText} />
    </Wrapper>
  );
};

export default HealthCare;
