import React, { FC } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import classnames from "classnames";
import IconSearch from './iconSearch.svg';

const Input: FC<InputProps> = ({ loupe, typeField, placeholder, className, ...props }): JSX.Element => {
  return (
    <div className={styles.box}>
      <input
        className={classnames(styles.input, className)}
        placeholder={placeholder}
        type={typeField}
        {...props}
      />
      {loupe && <IconSearch className={styles.loupe} />}
    </div>
  );
};

export default Input;
