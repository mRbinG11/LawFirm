import React from "react";
import styles from "./NavBrand.module.css";
import Logo from "../../../assets/logo.svg";

const NavBrand = () => {
  return (
    <div className={styles.navBrand}>
      <img src={Logo} alt="logo" width={30} />
      <h2>BLF</h2>
    </div>
  );
};

export default NavBrand;
