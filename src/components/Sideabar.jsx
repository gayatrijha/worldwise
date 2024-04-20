import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

const Sideabar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* <p>list of cities</p> */}
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by World Wise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sideabar;
