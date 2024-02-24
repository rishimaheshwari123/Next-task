import React from "react";
import styles from "../styles/HomePage.module.scss";
import Nav2 from "./layout/Nav2";
import Head from "./layout/Head";
import data from "../data";
import Content from "./layout/Content";
import RelatedDeals from "./layout/RelatedDeals";
import Content2 from "./layout/Content2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Slide } from "react-awesome-reveal";

const HomePage = () => {
  const Arrow = () => {
    return <span> &nbsp; &gt; &nbsp; </span>;
  };

  return (
    <div className={styles["main"]}>
      <Head />
      <Nav2 />
      <div className={styles["flow"]}>
        Home <Arrow /> Hosting for all <Arrow /> Hosting <Arrow /> Hosting6{" "}
        <Arrow /> Hosting5{" "}
      </div>
      <Slide>
        {data.map((data, index) => (
          <Content data={data} index={index} />
        ))}
        <Content2 />
        <h2 className={styles["head2"]}>Related deals you might like</h2>
        <RelatedDeals />
        <div className={styles["signUp_container"]}>
          <h2 className={styles["head2"]}>
            Sign up and get exclusive special deals
          </h2>
          <InputGroup className={styles["signUp"]}>
            <Form.Control className={styles["form"]} />
            <Button className={styles["btn"]} id="button-addon2">
              Sign Up
            </Button>
          </InputGroup>
        </div>
      </Slide>
    </div>
  );
};

export default HomePage;
