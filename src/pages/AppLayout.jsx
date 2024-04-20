import React from "react";
import Sideabar from "../components/Sideabar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sideabar />
      <Map />
    </div>
  );
};

export default AppLayout;
