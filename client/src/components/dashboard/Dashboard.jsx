import React from "react";

import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <h3>Dashboard</h3>
        <p>
          Hello <span></span>!
        </p>
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
