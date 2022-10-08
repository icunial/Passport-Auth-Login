import React from "react";

import styles from "./Register.module.css";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <h3>Register</h3>
        <form>
          <label className={styles.itemsTitle}>Name</label>
          <input type="text"></input>
          <label className={styles.itemsTitle}>Email</label>
          <input type="email"></input>
          <label className={styles.itemsTitle}>Password</label>
          <input type="password"></input>
          <label className={styles.itemsTitle}>Confirm Password</label>
          <input type="password"></input>
          <button className={styles.register}>Register</button>
        </form>
        <p>
          Have an Account?{" "}
          <Link to="/login" className={styles.login}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
