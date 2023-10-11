import Button from "../Ui/Button";
import HeroSectioncard from "../Ui/HeroSectionCard";
import Wrapper from "../Ui/Wrapper";
import styles from "./HealthCare.module.css";
const HealthCare = () => {
  const title = "Health Care";
  const message =
    "Advancing human health through renovation research, education and care";
  const img = "images/HealthCare-Bg.png";
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
  const cardsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
  const dataArr = healthCaredata.map((each, i) => (
    <div className={styles.heathCard} key={i + 1}>
      <div className={styles.minHealthCard}>
        <h4>{each.tittle}</h4>
        <span className={styles.parag}>{each.text}</span>
      </div>
      <p>
        {each.textt}
        {cardsvg}
      </p>
    </div>
  ));
  const btnText = "More about health care";
  return (
    <Wrapper classes={styles.healthCare}>
      <HeroSectioncard title={title} message={message} />
      <div className={styles.heathCareHero}>
        <div className={styles.healthCareleft}>
          <img src={img} alt={img.slice(7, -4)} />
        </div>
        <div className={styles.healthCareright}>{dataArr}</div>
      </div>
      <Button text={btnText} />
    </Wrapper>
  );
};

export default HealthCare;
