import React, { FC } from "react";
import { CommonCardProps } from "./CommonCard.props";
import styles from "./CommonCard.module.css";
import classNames from "classnames";

const CommonCard: FC<CommonCardProps> = ({
  className,
  width,
  height,
  shadow = false,
  purple,
  children,
  ...props
}): JSX.Element => {
  return (
    <div
      className={classNames(styles.box, className, {
        [styles.shadow]: shadow,
        [styles.purple]: purple,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default CommonCard;
