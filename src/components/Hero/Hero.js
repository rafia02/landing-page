"use client";
import React from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/images/hero1.jpg";
import img2 from "@/assets/images/hero2.png";

const Hero = () => {
  return (
    <section className="ic_section_space ">
      <div className="container">
        <div className={styles.ic_wrapper}>
          <div className={styles.ic_grid}>
            <motion.div
              className={styles.content}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.content_width}>
                <motion.h1
                  className={styles.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We Create Websites
                </motion.h1>

                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt.
                </motion.p>

                <motion.p
                  className={styles.attribution}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Image from{" "}
                  <a href="#" className={styles.link}>
                    Freepik
                  </a>
                </motion.p>

                <motion.button
                  className={styles.button}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW PORTFOLIO
                </motion.button>
              </div>
            </motion.div>

            <div className={styles.visualSection}>
              <motion.div
                className={styles.devicesContainer}
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={img1}
                  alt="Website mockups on tablets"
                  width={400}
                  height={200}
                  className={styles.devicesImage}
                  priority
                />

                <Image
                  src={img2}
                  alt="Website mockups on tablets"
                  width={525}
                  height={494}
                  className={styles.devicesImage2}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
