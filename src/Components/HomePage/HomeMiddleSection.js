import React from "react";
import styles from "./HomeMiddleSection.module.css";

const HomeMiddleSection = () => {
  return (
    <div className={`${styles.container} pb-10`}>
      <div className={`grid grid-cols-2 pt-7 sm:grid-cols-1 ${styles.smallScreen}`}>
        <div className={`${styles.firstCard}  px-5 py-5`}>
          <div className="grid grid-cols-3 gap-x-12 sm:grid-cols-2 sm:gap-y-5 sm:gap-x-6">
            <div>
              <div className={`${styles.title}`} >Referral Earning</div>
              <div className={`${styles.value}`}>₹ 2,500</div>
            </div>
            <div >
              <div className={`${styles.title}`}>Total Referrals</div>
              <div className={`${styles.value}`}>7</div>
            </div>
            <div >
              <div className={`${styles.title}`}>Wallet Balance</div>
              <div className={`${styles.value}`}>₹ 500</div>
            </div>
          </div>
          <div className={`flex flex-row justify-center mt-6 ${styles.btnBox} `}>
            <div className={styles.btn}>Withdraw Balance</div>
          </div>
        </div>
        <div className={`${styles.secondCard} ml-24 `}>
          <div className={`${styles.referralTitle}`}>Your Referral Code</div>
          <div className={`${styles.referralValue}`}>EDCH54</div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddleSection;
