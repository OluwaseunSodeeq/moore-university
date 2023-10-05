import NavList from "../Nav/NavList";
import styles from "./MiniNav.module.css";
const MiniNav = ({ open, handler }) => {
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
    <div className={`${open ? styles.miniNavHide : styles.miniNavShow}`}>
      <NavList listArray={miniNavList} handler={handler} />
    </div>
  );
};

export default MiniNav;
