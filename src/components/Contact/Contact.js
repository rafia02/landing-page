import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import img from "@/assets/images/contact.jpg";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div>
        <div className={styles.ic_grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>CONTACT US</h1>

            <p className={styles.subtitle}>
              We are here to meet any business need and to promote your company
              online!
            </p>

            <div className={styles.divider} />

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div>
                  <span className={styles.label}>Phone:</span>
                  <a href="tel:+12322525522" className={styles.value}>
                    1 (232) 252 55 22
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div>
                  <span className={styles.label}>Location:</span>
                  <span className={styles.value}>
                    75 Street Sample, WI 63025
                  </span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div>
                  <span className={styles.label}>Mail:</span>
                  <a href="mailto:template@sample.com" className={styles.value}>
                    template@sample.com
                  </a>
                </div>
              </div>
            </div>

            <p className={styles.attribution}>
              Image from{" "}
              <a href="#" className={styles.link}>
                Freepik
              </a>
            </p>
          </div>

          <div className={styles.imageSection}>
            <Image
              src={img}
              alt="Modern workspace with desk, lamp, laptop and wall art"
              width={700}
              height={500}
              className={styles.workspaceImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
