import React, { FC } from "react";
import Header from "../../../components/Htag/Htag";
import Chart from "../Chart/Chart";
import SideBlock from "../SideBlock/SideBlock";
import TopPanel from "../TopPanel/TopPanel";
import styles from "./Dashboard.module.scss";

const Dashboard: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header tag="h1">Dashboard</Header>
      <div className={styles.firstRow}>
        <TopPanel />
      </div>
      <div className={styles.secondRow}>
        <Chart />
        <SideBlock />
      </div>
    </div>
  );
};

export default Dashboard;
