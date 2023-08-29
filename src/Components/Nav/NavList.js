import styles from "./NavList.module.css";

const NavList = (props) => {
  return (
    <ul className={styles}>
      {props.listArray.map((nav, i) => (
        <li key={i + 1}>{nav}</li>
      ))}
    </ul>
  );
};

export default NavList;
