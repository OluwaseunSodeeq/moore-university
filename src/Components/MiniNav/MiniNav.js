// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";

import styles from "./MiniNav.module.css";
const MiniNav = ({ open, setOpen, handler }) => {
  // const miniNavList = [
  //   "News",
  //   "Events",
  //   "Academics",
  //   "Research",
  //   "Health Care",
  //   "Campus Life",
  //   "Admission",
  //   "About",
  // ];

  return (
    <div
      className={`${styles.miniNav} ${
        open ? styles.miniNavHide : styles.miniNavShow
      }`}
      onClick={() => setOpen(true)}
    >
      <ul>
        <li>
          <Link
            to="news"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to="events"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            onClick={() => setOpen(true)}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="academics"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            Academics
          </Link>
        </li>
        <li>
          <Link
            to="research"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            Research
          </Link>
        </li>
        <li>
          <Link
            to="health"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            Health Care
          </Link>
        </li>
        <li>
          <Link
            to="campuslife"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            Campus Life
          </Link>
        </li>
        <li>
          <Link
            to="admission"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            Admission
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(true)}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

// const MiniNav = ({ open, handler }) => {
//   const miniNavList = [
//     "News",
//     "Events",
//     "Academics",
//     "Research",
//     "Health Care",
//     "Campus Life",
//     "Admission",
//     "About",
//   ];
//   return (
//     <div className={`${open ? styles.miniNavHide : styles.miniNavShow}`}>
//       miniNavList.map((nav, i) => (<li key={i + 1}>{nav}</li>))
//       {/* <NavList listArray={miniNavList} handler={handler} /> */}
//     </div>
//   );
// };

export default MiniNav;
