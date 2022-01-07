import classNames from "classnames";
import React, { FC } from "react";
import CommonCard from "../../../components/CommonCard/CommonCard";
import Htag from "../../../components/Htag/Htag";
import styles from "./CategoriesBlock.module.scss";
import { CategoriesBlockConfig } from "./CategoriesBlockConfig";

const CategoriesBlock: FC = (): JSX.Element => {
  return (
    <CommonCard className={styles.box}>
      <Htag tag="h3" className={styles.title}>
        {" "}
        Top Categories
      </Htag>
      <div className={styles.subtitle}>
        <span>28 Categories, 1400 Posts</span>
      </div>
      <div className={styles.categoriesBox}>
        {CategoriesBlockConfig.map(({title,subtitle}, index) => {
          return (
            <div key={title} className={styles.categoryBox}>
              <div
                className={classNames(styles.firstRow, styles.categorieTitle)}
              >
                <div>{title}</div>
                <div>8.2k</div>
              </div>
              <div className={styles.secondRow}>
                <div className={styles.categorieSubtitle}>
                  {subtitle}
                </div>
                <div>+472</div>
              </div>
             {index === CategoriesBlockConfig.length-1 ? <></> :  <div className={styles.hr}></div>}
            </div>
          );
        })}
      </div>
    </CommonCard>
  );
};

export default CategoriesBlock;
