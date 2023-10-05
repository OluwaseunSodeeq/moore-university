import styles from "./Prefooter.module.css";

const FooterList = (props) => {
  const data = [
    {
      heading: "SCHOOL",
      lists: [
        "Business",
        "Education",
        "Engineering",
        "Humanities & Science",
        "Law",
        "Medicine",
        "Sustainability",
      ],
    },
    {
      heading: "HEALTH CARE",
      lists: ["Moore health care", "Moore children's health"],
    },
    { heading: "ONLINE LEARNING", lists: ["Moore online"] },
    { heading: "ABOUT MOORE", lists: ["Facts", "History", "Accreditations"] },
    {
      heading: "ADMISSION",
      lists: ["Undergraduate", "Graduate", "Financial aid"],
    },
    {
      heading: "DEPARTMANT",
      lists: ["Departments A-Z", "Interdisplinary programs"],
    },
    { heading: "RESEARCH", lists: ["Research A-Z", "Libraries"] },
    {
      heading: "RESOURCES",
      lists: [
        "Course map",
        "Community Engagements",
        "Directory",
        "Humanities & Science",
        "Moore Profile",
      ],
    },
  ];
  const index = props.index;
  return (
    <div className={styles.listsContainer}>
      <h4>{data[index].heading}</h4>
      <div className={styles.lists}>
        {data[index].lists.map((each) => (
          <span className={styles.dataLi} key={each}>
            {each}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterList;
