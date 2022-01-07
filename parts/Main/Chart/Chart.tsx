import React, { FC } from "react";
import CommonCard from "../../../components/CommonCard/CommonCard";
import styles from "./Chart.module.css";

const Chart: FC = (): JSX.Element => {
  return (
    <CommonCard className={styles.box}>
        CHART
    </CommonCard>
  );
};

export default Chart;
