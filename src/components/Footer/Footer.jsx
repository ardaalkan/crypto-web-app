import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_lists}>
        <div className={styles.footer_support_list}>
          <h2>Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>API Status</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h2>Info</h2>
          <ul>
            <li>Abouts Us</li>
            <li>Careers</li>
            <li>Invest</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_social_lists}>
        <div>
          <ThemeToggle />
        </div>
        <p>Sign Up Crypto News</p>
        <div>
          <form>
            <input
              className={styles.footer_input}
              type="email"
              placeholder="Enter your Email"
            />
            <button className={styles.footer_signIn_button}>Sign Up</button>
          </form>
        </div>
        <div className={styles.footer_social_icons}>
          <AiOutlineInstagram />
          <FaTiktok />
          <FaTwitter />
          <FaFacebookF />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
