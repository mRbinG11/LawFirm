import React from "react";
import styles from "./NavBar.module.css";
import NavBrand from "./NavBrand/NavBrand";
import Menu from "./Menu/Menu";
import Button from "./Button/Button";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavBrand />
      <Menu />
      <Button children="Contact Now" />
    </nav>
  );
};

export default NavBar;
