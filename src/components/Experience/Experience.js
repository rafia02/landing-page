import React from "react";
import styles from "./experience.module.css";
import bg from "@/assets/images/bg2.jpg";

const Experience = () => {
  return (
    <div
      className="ic_section_space"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.ic_grid}>
          <div className={styles.card}>
            <h1>Crafting digital experiencess</h1>
            <p className={styles.des}>
              Join the elite ranks of sustained value creators
            </p>

            <button className={styles.btn}>Contuct Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
