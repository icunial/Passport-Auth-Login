import React, { useEffect, useState } from "react";

import styles from "./Dashboard.module.css";

import Axios from "axios";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  const [data, setData] = useState("");

  useEffect(() => {
    /* fetch("http://localhost:3001/users/user", {
      credentials: "include",
    }).then((res) => console.log(res)); */
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/users/user",
    }).then((res) => {
      console.log(res);
      if (res.data === false) history.push("/login");
      else setData(res.data);
    });
  }, [history]);

  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <h3>Dashboard</h3>
        <p>
          Hello <span>{data.name}</span>!
        </p>
        <button
          className={styles.logout}
          onClick={() => {
            Axios({
              method: "GET",
              withCredentials: true,
              url: "http://localhost:3001/users/logout",
            }).then((res) => {
              history.push("/login");
            });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
