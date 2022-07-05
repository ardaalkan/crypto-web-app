import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={styles.rounded_navbar}>
      <Link to="/">
        <h1 className={styles.cryptobase_text}>Cryptobase</h1>
      </Link>
      <div className={styles.themetoggle_container}>
        <ThemeToggle />
      </div>
      <div className={styles.sign_container}>
        <Link to="/signin">
          <div className={styles.signIn_container}>Sign In</div>
        </Link>
        <Link to="/signup">
          <div className={styles.signUp_container}>Sign Up</div>
        </Link>
      </div>
      <div onClick={handleNav} className={styles.aiOutlineMenu}>
        {nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? styles.mobile_menu_container
            : styles.mobile_menu_container_toggle
        }
      >
        <ul className={styles.mobile_menu_container_ul}>
          <li>
            <Link to="/">
              <div className={styles.mobile_home}>Home</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={styles.mobile_account}>Account</div>
            </Link>
          </li>
          <li className={styles.mobile_themetoggle}>
            <ThemeToggle />
          </li>
        </ul>
        <div className={styles.mobile_menu_sign_container}>
          <Link to="/signin">
            <div className={styles.mobile_signIn_container}>Sign In</div>
          </Link>
          <Link to="/signup">
            <div className={styles.mobile_signUp_container}>Sign Up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
