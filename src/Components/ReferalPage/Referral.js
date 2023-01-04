import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Card from "./Card";
import Carousel from "better-react-carousel";
import styles from "./Referral.module.css";

const Referral = () => {
  const navigate = useNavigate();
  const param = useParams();
  let settings = {
    breakpoint: 800,
    cols: 3,
    rows: 1,
    gap: 20,
    loop: true,
    hideArrow:true,
    showDots:true,
  };
  return (
    <div>
      <Navbar refer={param.refer ? "> Friends Referred" : " "} />
      <div
        className={`${styles.arrow} ${styles.hiddenOnDesktop}`}
        onClick={() => {
          navigate("/");
        }}
      >
        ← go back
      </div>
      <div className={`${styles.container} mt-1`}>
        <div className={`flex flex-row justify-between ${styles.smallScreen}`}>
          <div>
            <div className={`${styles.referralTitle}`}>Your Referral Code </div>
            <div className={`${styles.referralValue}`}>EDCH54</div>
          </div>
          <div className={styles.walletBox}>
            <div className={`${styles.title}`}>Wallet Balance </div>
            <div className={`${styles.value}`}>₹ 500</div>
          </div>
        </div>
        <div className="mt-16">
          <div className={`${styles.referralTitle}`}>
            Friends who enrolled(3)
          </div>
          <div className={`${styles.cardList} ${styles.hiddenOnMobile }`}>
            <Carousel  {...settings} >
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className={`${styles.cardList} ${styles.hiddenOnDesktop }`}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={`${styles.footerText} mt-16 pb-11`}>
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default Referral;
