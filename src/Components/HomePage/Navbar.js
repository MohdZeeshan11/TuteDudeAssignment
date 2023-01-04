import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <nav className={`${styles.container} `}>
      <header className={`${styles.navHeader}`}>
        <div>
          <img
            src="/assets/tuteDudeLogo.png"
            className={`${styles.image} mb-1`}
            alt="tuteDudeLogo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className={styles.navLink}>
          <div className={`${styles.title} ${styles.hiddenOnMobile}`}>
            My Assignment
          </div>
          <div className={`${styles.title} ${styles.hiddenOnMobile}`}>
            Chat with Mentor
          </div>

          <div className={`${styles.title} ${styles.user}`}>
            <div className={`${styles.hiddenOnMobile}`}>
              <img src="/assets/avatar.png" alt="avatarLogo" />
            </div>
            {/* <div>ProfileName</div> */}
            {/* <div>▾</div> */}
            {/* <div style={{
              border:"none"
            }}> */}
              <select name="name" id="profileName" className={styles.selectBox}>
                <option selected>ProfileName</option>
                <option value="alberto">Alberto</option>
                <option value="johnson">Johnson</option>
                <option value="michael">Michael</option>
              </select>
            {/* </div> */}
          </div>

        </div>
      </header>
      <div className={`${styles.header}`}>
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          UI/UX
        </span>
        <span
          onClick={() => {
            navigate("/refer");
          }}
        >
          {" "}
          {`>`} Refer & Earn{" "}
        </span>{" "}
        {props.refer ? props.refer : ""}
      </div>
    </nav>
  );
};

export default Navbar;
