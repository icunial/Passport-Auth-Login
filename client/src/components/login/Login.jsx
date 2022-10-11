import React, { useState } from "react";

import styles from "./Login.module.css";

import { Link } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
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
        <h3>Login</h3>
        <form>
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

          <button
            className={styles.login}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Login
          </button>
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
