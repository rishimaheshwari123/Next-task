import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../../styles/HomePage.module.scss";

const Nav2 = () => {
  return (
    <Nav className={styles["nav2"]}>
      <Nav.Link href="#action1" className={styles["nav-link"]}>
        Tools
      </Nav.Link>
      <Nav.Link href="#action2" className={styles["nav-link"]}>
        AWS Builder
      </Nav.Link>
      <Nav.Link href="#action2" className={styles["nav-link"]}>
        Start Build
      </Nav.Link>
      <Nav.Link href="#action1" className={styles["nav-link"]}>
        Build Supplies
      </Nav.Link>
      <Nav.Link href="#action2" className={styles["nav-link"]}>
        Website Tooling
      </Nav.Link>
      <Nav.Link href="#action2" className={styles["nav-link"]}>
        Blue Hosting
      </Nav.Link>
    </Nav>
  );
};

export default Nav2;
