import React from "react";
import styles from "./Faq.module.css";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.container} pb-20`}>
      <div className={styles.heading}>How does it work ?</div>
      <div
        className={`grid grid-cols-2 gap-y-9 gap-x-10 mt-6 sm:grid-cols-1 ${styles.smallScreen}`}
      >
        <div className="flex flex-row">
          <div className={`${styles.round} mr-5`}>
            <img src="/assets/people.png" alt="peopleLogo" />
          </div>
          <div>
            <div className={styles.title}>Invite your Friends</div>
            <div className={styles.text}>
              Share the link tutedude.com with your friends
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`${styles.round} mr-5`}>
            <img src="/assets/tag.png" alt="tagLogo" />
          </div>
          <div>
            <div className={styles.title}>Friend purchases any course</div>
            <div className={styles.text}>
              Using your REFERRAL CODE in the payments page
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`${styles.round} mr-5`}>
            <img src="/assets/paisa.png" alt="paisaLogo" />
          </div>
          <div>
            <div className={styles.title}>You get ₹ 200 as referral money</div>
            <div className={styles.text}>
              On total purchase the friend makes, into your wallet
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`${styles.round} mr-5`}>
            <img src="/assets/details.png" alt="detailsLogo" />
          </div>
          <div>
            <div className={styles.title}>Your Friend gets ₹ 200 Off </div>
            <div className={styles.text}>
              <div>On his overall fee on successful purchase using</div>
              <div>your referral code </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`${styles.round} mr-5`}>
            <img
              src="/assets/insta.png"
              alt="instaLogo"
              width="32px"
              height="32"
            />
          </div>
          <div>
            <div className={styles.title}>Transfer money from wallet</div>
            <div className={styles.text}>
              <div>When the wallet balance reaches ₹200 or more,</div>
              <div> you can withdraw it</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.footerText} mt-16`}
        onClick={() => {
          navigate("refer");
        }}
      >
        Friends Who Enrolled
      </div>
      <div className={`${styles.footerText} mt-5`}>Terms & Conditions</div>
    </div>
  );
};

export default Faq;
