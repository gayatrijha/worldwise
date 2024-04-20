import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

const Sideabar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by World Wise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sideabar;
