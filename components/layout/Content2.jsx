import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Content.module.scss";
import img from "../../images/image.png";
import Image from "next/image";
import Link from "next/link";

const Content2 = () => {
  return (
    <div className={styles["main"]}>
      <div className={styles["img-div"]}>
        <span className={styles["serial"]}>4</span>

        <Image src={img} width={141} height={103} alt="CDK" />
        <span>CDK</span>
      </div>

      <div className={styles["para"]}>
        <h6>CDK Resposive Builder</h6>
        <p>
          An extensive library of widgets and apps, and detailed step-by-step
          guides
        </p>
        <h6>Main Highlights</h6>
        <div className={styles["para4"]}>
          <div>
            <span>9.9</span> Building Responsive
          </div>
          <div>
            <span>8.9</span> Cool
          </div>
          <div>
            <span>9.7</span> Docs
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <b>Why we love it</b>
          <span>
            <i class="bi bi-check-circle" style={{ color: " #0855A1" }}>
              {" "}
            </i>{" "}
            Documentation
          </span>
          <span>
            <i class="bi bi-check-circle" style={{ color: " #0855A1" }}>
              {" "}
            </i>
            Easy Use
          </span>
          <span>
            <i class="bi bi-check-circle" style={{ color: " #0855A1" }}>
              {" "}
            </i>
            Out Of Box
          </span>
        </div>
        <Link href="#">
          Show More <i class="bi bi-chevron-down"></i>
        </Link>
      </div>
      <div className={styles["right"]}>
        <div className={styles["rating-div"]}>
          <span className={styles["rating-number"]}>9.7</span>
          <div>
            <span>Exceptional</span>
            <span className={styles["stars"]}>
              {[...Array(5)].map((x, i) => (
                <i class="bi bi-star-fill" key={i}></i>
              ))}
            </span>
          </div>
        </div>
        <Button className={styles["btn"]}>View</Button>
      </div>
    </div>
  );
};

export default Content2;
