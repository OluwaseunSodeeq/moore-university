// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";

import styles from "./MiniNav.module.css";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useState } from "react";
const MiniNav = ({ open, setOpen, handler }) => {
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
  const screenWidth = window.innerWidth > 1024;
  // const [active, setActive] = useState(false);
  const linkHandler = function (e) {
    console.log(e);
    // setActive(true);
    setOpen(true);
  };
  // useEffect(() => {
  //   const key = miniNavList(0).toLowerCase();
  //   console.log(key);
  // }, []);

  console.log(screenWidth);

  return (
    <div
      className={`${styles.miniNav} ${
        open ? styles.miniNavHide : styles.miniNavShow
      }`}
      onClick={() => setOpen(true)}
    >
      <ul>
        {miniNavList.map((each) => {
          const key = each.toLowerCase();
          return (
            <li
              key={key}
              className={`${styles.navItem} ${
                each.toLowerCase() === key ? styles.active : styles.deactive
              }`}
            >
              <Link
                to={each.toLowerCase().replace(" ", "")}
                value={each.toLowerCase()}
                spy={true}
                smooth={true}
                offset={screenWidth ? -100 : -65}
                duration={500}
                onClick={(e) => linkHandler(key)}
              >
                {each}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MiniNav;
