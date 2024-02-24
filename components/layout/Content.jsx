import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Content.module.scss";
import img from "../../images/image.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Content = ({ data, index }) => {
  let serialNo = Number(index) + 1;
  return (
    <Fade>
      <div className={styles["main"]}>
        <div className={styles["img-div"]}>
          {data.tag ? (
            <span className={styles["tag"]}>
              <i class={`bi ${data.tag_icon}`}></i>{" "}
              <span style={{ marginLeft: "8px" }}></span> {data.tag}
            </span>
          ) : (
            ""
          )}

          <span className={styles["serial"]}>{serialNo}</span>

          <Image src={img} width={141} height={103} alt={data.image_title} />
          <span>{data.image_title}</span>
        </div>

        <div className={styles["para"]}>
          <h6>{data.title}</h6>
          <p>{data.description}</p>
          <h6>Main Highlights</h6>
          <p className={styles["para2"]}>[What You Get]: {data.what_you_get}</p>
          <Link href="#">
            Show More <i class="bi bi-chevron-down"></i>
          </Link>
        </div>
        <div className={styles["right"]}>
          <div className={styles["rating-div"]}>
            <span className={styles["rating-number"]}>{data.rating}</span>
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
    </Fade>
  );
};

export default Content;
