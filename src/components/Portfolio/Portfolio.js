"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./portfolio.module.css";

const portfolioItems = [
  {
    id: 1,
    title: "Website Design",
    image: "/portfolio-1.png",
    alt: "Laptop showing modern website design",
  },
  {
    id: 2,
    title: "Mobile Application",
    image: "/portfolio-2.png",
    alt: "Mobile app interface design",
  },
  {
    id: 3,
    title: "Corporate Design",
    image: "/portfolio-3.png",
    alt: "Corporate branding and design",
  },
  {
    id: 4,
    title: "Mobile Application",
    image: "/portfolio-4.png",
    alt: "Mobile app user interface",
  },
  {
    id: 5,
    title: "Responsive Design",
    image: "/portfolio-5.png",
    alt: "Responsive web design showcase",
  },
  {
    id: 6,
    title: "Digital Product",
    image: "/portfolio-6.png",
    alt: "Digital product design",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>
            Quam quisque id diam vel quam elementum. Vestibulum lectus mauris
            ultrices eros in cursus turpis massa tincidunt. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className={styles.portfolioItem}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className={styles.portfolioImage}
                />
              </div>
              <h3 className={styles.portfolioTitle}>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
