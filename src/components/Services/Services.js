"use client";

import { motion } from "framer-motion";
import { PiBrainThin } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { VscSymbolColor } from "react-icons/vsc";
import styles from "./services.module.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "STRATEGY",
      icon: PiBrainThin,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      variant: "default",
    },
    {
      id: 2,
      title: "BRANDING",
      icon: GrAnnounce,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      variant: "highlighted",
    },
    {
      id: 3,
      title: "DEVELOPMENT",
      icon: BiCodeBlock,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      variant: "default",
    },
    {
      id: 4,
      title: "WEB DESIGN",
      icon: VscSymbolColor,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      variant: "yellow",
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

  const cardVariants = {
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
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={`${styles.title} ic_section_heading`}>
            Epic design and engineering
          </h2>
          <p className={styles.subtitle}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`${styles.card} ${styles[service.variant]}`}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.iconContainer}>
                  <IconComponent className={styles.icon} size={38} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
