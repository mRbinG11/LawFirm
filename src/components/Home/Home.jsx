import React from "react";
import styles from "./Home.module.css";
import HomeImage from "../../assets/homeImage.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.text}>
        <h1 className={styles.title1}>You don’t have to </h1>
        <h1 className={styles.title2}> Fight them Alone.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
      </div>
      <div className={styles.homeImg}>
        <img src={HomeImage} alt="home" width={468} />
      </div>
    </div>
  );
};

export default Home;
