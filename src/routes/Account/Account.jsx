import React from "react";
import SavedCoins from "../../components/SavedCoins/SavedCoins";
import styles from "./Account.module.css";

const Account = () => {
  return (
    <div className={styles.account_container}>
      <div className={styles.account_containe_user}>
        <div>
          <h1 className={styles.account_container_h1}>Account</h1>
          <div>
            <p className={styles.welcome_user}>Welcome, User</p>
          </div>
        </div>
        <div>
          <button className={styles.sign_out_button}>Sign Out</button>
        </div>
      </div>
      <div className={styles.saved_coins_lists}>
        <div className={styles.saved_coins_list}>
          <h1 className={styles.saved_coins_h1}>Saved Coins</h1>
          <SavedCoins />
        </div>
      </div>
    </div>
  );
};

export default Account;
