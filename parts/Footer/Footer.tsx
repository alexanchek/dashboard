import React, { FC } from "react";
import styles from "./Footer.module.css";

const links = [
  { title: "About", route: "/#" },
  { title: "Support", route: "/#" },
  { title: "Purchase", route: "/#" },
];

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <div className={styles.text}>2021 © Elegant Dashboard - elegant-dashboard.com</div>
          <ul className={styles.list}>
            {links.map(({ title, route }) => {
              return (
                <li key={title}>
                  <a href={route}>{title}</a>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
};

export default Footer;
