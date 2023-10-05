import styles from "./Campus.module.css";
const CampusCard = () => {
  const miniData = [
    {
      image: "images/campus-image01.png",
      miniTitle: "UNIVERSITY AFFAIRS",
      miniText: "Stanford board of Trustees release of report and anouncement ",
    },
    {
      image: "images/campus-image02.png",
      miniTitle: "UNIVERSITY AFFAIRS",
      miniText: "Stanford board of Trustees release of report and anouncement ",
    },
    {
      image: "images/campus-image03.png",
      miniTitle: "SCIENCE AND TECHNOLOGY",
      miniText: "The Science illuminated by the first light in universe",
    },
    {
      image: "images/campus-image04.png",
      miniTitle: "TEACHING & STUDENTS",
      miniText: "How Ocean is reimagining the undergraduate experience",
    },
    {
      image: "images/campus-image05.png",
      miniTitle: "SCIENCE AND TECHNOLOGY",
      miniText: "ChatGPT outscore med student on clinical exam question",
    },
    {
      image: "images/campus-image06.png",
      miniTitle: "SOCIAL SCIENCE",
      miniText: "Cash amnesia",
      // height: "250px",
      // width: "300px",
    },
  ];

  const data = miniData.map((data, i) => {
    const key = i + 1;
    console.log(key);
    // const style = { maxWidth: data.width };
    return (
      // <div key={i + 1} style={{ maxWidth: data.width }}>
      <div
        key={key}
        className={`${
          key === 3 || key === 4 ? styles.bigSize : styles.smallSize
        } ${styles.card}`}
      >
        <div className={styles.campusCardImg}>
          <img src={data.image} alt={data.image} className={styles.image} />
        </div>
        <div className={styles.campusCardText}>
          <h4>{data.miniTitle}</h4>
          <h6>{data.miniText}</h6>
        </div>
      </div>
    );
  });

  return <div className={styles.cards}>{data}</div>;
};

export default CampusCard;
