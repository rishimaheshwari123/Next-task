import React from "react";
import img from "../../images/image.png";
import Image from "next/image";
import styles from "../../styles/RelatedDeals.module.scss";
import { Button } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const RelatedDeals = () => {
  const Deals = () => {
    return (
      <Slide>
        <div className={styles["item"]}>
          <div className={styles["img-div"]}>
            <Image src={img} width={141} height={103} alt="" />
          </div>
          <div className={styles["tags"]}>
            <span className={styles["tag"]}>20% Off</span>{" "}
            <span className={styles["tag"]}>Limited Time</span>
          </div>

          <div className={styles["description"]}>
            <span className={styles["name"]}>Webbuilder 1</span>
            <div>Computer Modern clasic with wix support</div>
            <div>
              <span className={styles["price"]}>$39.96</span>{" "}
              <span className={styles["discount-price"]}>49.96</span>{" "}
              <span className={styles["discount-percent"]}>(20% Off)</span>
            </div>
            <Button className={styles["btn"]}>View Deal</Button>
          </div>
        </div>
      </Slide>
    );
  };

  return (
    <div className={styles["container"]}>
      <Deals />
      <Deals />
      <Deals />
    </div>
  );
};

export default RelatedDeals;
