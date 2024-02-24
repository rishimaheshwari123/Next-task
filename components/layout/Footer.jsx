import React from "react";
import styles from "../../styles/HomePage.module.scss";
import { Nav } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["left"]}>
        <h5>CATEGORIES</h5>
        <Link href="#" className={styles["footer-link"]}>
          {" "}
          Web Builder
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          {" "}
          Hosting
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          {" "}
          Data Center
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          {" "}
          Robotic-Automation
        </Link>
      </div>
      <div className={styles["center"]}>
        <h5>CONTACT</h5>
        <Link href="#" className={styles["footer-link"]}>
          Contact
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          Privacy Policy
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          Terms of Service
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          Categories
        </Link>
        <Link href="#" className={styles["footer-link"]}>
          About
        </Link>
      </div>
      <div className={styles["right"]}>
        {" "}
        <Link href="#" className={styles["footer-link"]}>
          United States <i class="bi bi-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
