import React, { FC } from "react";
import Input from "../../components/Input/Input";
import styles from "./Header.module.css";
import RightPanel from "./RightPanel/RightPanel";

const Header: FC = (): JSX.Element => {
  return (
    <div className={styles.box}>
      <Input typeField={"text"} placeholder="Enter text" loupe />
      <RightPanel />
    </div>
  );
};

export default Header;
