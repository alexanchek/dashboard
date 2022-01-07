import cn from "classnames";
import React, { FC } from "react";
import styles from "./Htag.module.scss";
import { HeaderProps } from "./Htag.props";

const Htag: FC<HeaderProps> = ({ children, className, tag, ...props }): JSX.Element => {
  return (
    <div
      className={cn(styles.header, className, {
        [styles.h1]: tag == "h1",
        [styles.h2]: tag == "h2",
        [styles.h3]: tag == "h3",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Htag;
