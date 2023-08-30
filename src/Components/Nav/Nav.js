import Card from "../Ui/Card";
import Logo from "./Logo";
import classes from "./Nav.module.css";
import NavList from "./NavList";
import Search from "./Search";

const Nav = () => {
  const navList = [
    "Information for:",
    "Faculty & Staff",
    "Students",
    "FAculty & Staff",
    "Families",
    "Visitors",
    "Alumni",
  ];

  return (
    <nav className={classes.navFlex}>
      <Card classes={classes.containerNav}>
        <Logo />
        <div className={classes.navLeft}>
          <NavList listArray={navList} />
          <Search />
        </div>
      </Card>
    </nav>
  );
};

export default Nav;
