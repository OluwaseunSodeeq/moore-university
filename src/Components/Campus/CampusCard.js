import styles from "./Campus.module.css";
const CampusCard = (props) => {
  const miniData = [
    {
      image: "images/campus-image01.png",
      miniTitle: "UNIVERSITY AFFAIRS",
      miniText: "Stanford board of Trustees release of report and anouncement ",
      width: "300px",
      height: "250px",
    },
    {
      image: "images/campus-image02.png",
      miniTitle: "UNIVERSITY AFFAIRS",
      miniText: "Stanford board of Trustees release of report and anouncement ",
      height: "250px",
      width: "300px",
    },
    {
      image: "images/campus-image03.png",
      miniTitle: "SCIENCE AND TECHNOLOGY",
      miniText: "The Science illuminated by the first light in universe",
      height: "250px",
      width: "500px",
    },
    {
      image: "images/campus-image04.png",
      miniTitle: "TEACHING & STUDENTS",
      miniText: "How Ocean is reimagining the undergraduate experience",
      height: "250px",
      width: "500px",
    },
    {
      image: "images/campus-image05.png",
      miniTitle: "SCIENCE AND TECHNOLOGY",
      miniText: "ChatGPT outscore med student on clinical exam question",
      height: "250px",
      width: "300px",
    },
    {
      image: "images/campus-image06.png",
      miniTitle: "SOCIAL SCIENCE",
      miniText: "Cash amnesia",
      height: "250px",
      width: "300px",
    },
  ];

  const data = miniData.map((data, i) => {
    // const style = { maxWidth: data.width };
    return (
      <div key={i + 1} style={{ maxWidth: data.width }}>
        <div style={{ height: data.height, width: "100%" }}>
          <img
            src={data.image}
            alt={data}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h4>{data.miniTitle}</h4>
        <h6>{data.miniText}</h6>
      </div>
    );
  });

  return <div className={styles.cards}>{data}</div>;
};

export default CampusCard;
