import React from "react";

import styles from "./Choose.module.css";

import { Link } from "react-router-dom";

function Choose() {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <h3>Create an account or login</h3>
        <div className={styles.btnContainer}>
          <Link to="/register" className={styles.register}>
            Register
          </Link>
          <Link to="/login" className={styles.login}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Choose;
