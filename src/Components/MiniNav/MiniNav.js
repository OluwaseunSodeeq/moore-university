import NavList from "../Nav/NavList";
import styles from "./MiniNav.module.css";
const MiniNav = () => {
  const miniNavList = [
    "News",
    "Events",
    "Academics",
    "Research",
    "Health Care",
    "Campus Life",
    "Admission",
    "About",
  ];
  return (
    <div className={styles.miniNav}>
      <NavList listArray={miniNavList} />
    </div>
  );
};

export default MiniNav;
