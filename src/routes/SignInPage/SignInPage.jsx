import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";
import { UserAuth } from "../../context/AuthContext";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className={styles.sign_in_page_container}>
        <h1 className={styles.sign_in_page_h1}>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <label>Email</label>
            <div className={styles.input_container_email}>
              <AiOutlineMail className={styles.ai_icon} />
              <input onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
          </div>
          <div className={styles.input_container}>
            <label>Password</label>
            <div className={styles.input_container_email}>
              <AiFillLock className={styles.ai_icon} />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
          </div>
          <button className={styles.signin_button}>Sign In</button>
        </form>
        <p className={styles.p_sign_in}>
          Don't have an account?
          <Link className={styles.p_sign_in_linkTag} to="/signup">
            Sign Up{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
