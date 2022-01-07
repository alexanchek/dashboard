import React, { FC } from "react";
import { CommonCardProps } from "./CommonCard.props";
import styles from "./CommonCard.module.css";
import classNames from "classnames";

const CommonCard: FC<CommonCardProps> = ({
  className,
  width,
  height,
  shadow = false,
  children,
  ...props
}): JSX.Element => {
    const size = {
        width: width ? `${width}` : '100%',
        height: height ? `${height}` : ''
    }

  return (
    <div
    style={size}
      className={classNames(styles.box, {
        [styles.shadow]: shadow,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default CommonCard;
