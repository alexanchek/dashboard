import React, { FC } from "react";
import Header from "../../../components/Htag/Htag";
import Footer from "../../Footer/Footer";
import Chart from "../Chart/Chart";
import LeftPart from "../LeftPart/LeftPart";
import RightPart from "../RightPart/RightPart";
import SideBlock from "../SideBlock/SideBlock";
import TopPanel from "../TopPanel/TopPanel";
import styles from "./Dashboard.module.scss";

const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header tag="h1">Dashboard</Header>
        <div className={styles.firstRow}>
          <TopPanel />
        </div>
        <div className={styles.secondRow}>
          <LeftPart />
          <RightPart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
