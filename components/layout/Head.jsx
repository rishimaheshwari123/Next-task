import React from "react";
import styles from "../../styles/HomePage.module.scss";
import { Fade } from "react-reveal";

const Head = () => {
  return (
    <Fade right>
      <div>
        <h1 className={styles["heading"]}>Best Website builder in the US</h1>
        <hr />
        <div className={styles["info"]}>
          <div>
            <span style={{ marginRight: "50px" }}>
              <i class="bi bi-check-circle"></i> Last Updated - February 22,2020
            </span>
            <span>
              {" "}
              <i class="bi bi-info-circle"></i> Advertising Disclosure
            </span>
          </div>
          <span>
            {" "}
            Top Relevant <i class="bi bi-chevron-down"></i>
          </span>
        </div>
        <hr />
      </div>
    </Fade>
  );
};

export default Head;
