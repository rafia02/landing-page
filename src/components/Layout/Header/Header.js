"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./header.module.css";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles.logo}>Quagnite</div>

          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={styles.navMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <ul>
              <li>
                <a href="#" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
