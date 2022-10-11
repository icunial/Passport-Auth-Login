import React, { useState } from "react";

import styles from "./Register.module.css";

import { Link } from "react-router-dom";

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleInputChange = (e) => {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };

      return newInput;
    });
  };

  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <h3>Register</h3>
        <form>
          <label className={styles.itemsTitle}>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          ></input>
          <label className={styles.itemsTitle}>Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
          ></input>
          <label className={styles.itemsTitle}>Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          ></input>
          <label className={styles.itemsTitle}>Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={input.password2}
            onChange={handleInputChange}
          ></input>
          <button
            className={styles.register}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Register
          </button>
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
