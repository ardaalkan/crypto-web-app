import styles from "./SignUpPage.module.css";
import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className={styles.sign_up_page_container}>
        <h1 className={styles.sign_up_page_h1}>Sign Up</h1>
        {error ? <p className={styles.sign_up_page_error_tag}></p> : null}
        <form onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <label>Email</label>
            <div className={styles.input_container_email}>
              <AiOutlineMail className={styles.ai_icon} />
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className={styles.input_container}>
            <label>Password</label>
            <div className={styles.input_container_email}>
              <AiFillLock className={styles.ai_icon} />
              <input
                type="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className={styles.sign_up_button}>Sign Up</button>
        </form>
        <p className={styles.p_signup}>
          Already have an account?
          <Link className={styles.p_signup_linkTag} to="/signin">
            Sign Up{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
