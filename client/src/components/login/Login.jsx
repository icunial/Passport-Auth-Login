import React from "react";

import styles from "./Login.module.css";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <h3>Register</h3>
        <form>
          <label className={styles.itemsTitle}>Email</label>
          <input type="email"></input>
          <label className={styles.itemsTitle}>Password</label>
          <input type="password"></input>

          <button className={styles.login}>Login</button>
        </form>
        <p>
          No Account?{" "}
          <Link to="/register" className={styles.register}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
