import React, { FC } from "react";
import CommonCard from "../../../components/CommonCard/CommonCard";
import Htag from "../../../components/Htag/Htag";
import styles from "./SideBlock.module.css";
import Chart from "./chart.svg";

const SideBlock: FC = (): JSX.Element => {
  return (
    <>
      <CommonCard className={styles.box} purple>
        <div className={styles.sideBlock}>
          <div className={styles.header}>
            <Htag tag="h3" className={styles.title}>
              New Customers
            </Htag>
            <Htag tag="h2" className={styles.title}>
              +958
            </Htag>
          </div>
          <div className={styles.text}>28 Daily Avg.</div>
        </div>
        <div className={styles.svgBox}>
          <Chart className={styles.img} />
        </div>
      </CommonCard>
    </>
  );
};

export default SideBlock;
