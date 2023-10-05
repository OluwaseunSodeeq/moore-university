import styles from "../Ui/CardOne.module.css";

const CardOne = ({ each, styling, index }) => {
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
  return (
    <div key={index + 1} className={styling}>
      <div className={styles.academicsImgDiv}>
        <img src={each.img} alt="" />
      </div>
      <div className={styles.academicsContentDiv}>
        <h4>{each.title}</h4>
        <h6>{each.message}</h6>
        <p>
          {each.linkMsg} {cardsvg}
        </p>
      </div>
    </div>
  );
};

export default CardOne;
