import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div>
      <div className={styles.sign_up_page_container}>
        <h1 className={styles.sign_up_page_h1}>Sign In</h1>
        <form>
          <div className={styles.input_container}>
            <label>Email</label>
            <div className={styles.input_container_email}>
              <AiOutlineMail className={styles.ai_icon} />
              <input type="email" />
            </div>
          </div>
          <div className={styles.input_container}>
            <label>Password</label>
            <div className={styles.input_container_email}>
              <AiFillLock className={styles.ai_icon} />
              <input type="password" />
            </div>
          </div>
          <button className={styles.signin_button}>Sign In</button>
        </form>
        <p className={styles.p_signup}>
          Don't have an account?<Link className={styles.p_signup_linkTag} to="/signup">Sign Up </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
