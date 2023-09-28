import React from "react";
import styles from './Menu.module.css'
import Button from "./Button/Button";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Button children="Home" />
      <Button children="Attorneys" />
      <Button children="Practice Areas" />
      <Button children="About Us" />
    </div>
  );
};

export default Menu;
