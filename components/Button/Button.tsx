import React, { FC } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import classNames from "classnames";
import Theme from "./icons/theme.svg";
import Alert from "./icons/alert.svg";

const Button: FC<ButtonProps> = ({
  type,
  className,
  message,
  ...props
}): JSX.Element => {
  const renderButton = (): JSX.Element => {
    switch (type) {
      case "theme":
        return <Theme />;
      case "notification":
        return <Alert/>;
      default:
        return <></>;
    }
  };

  return (
    <button
      className={classNames(styles.box, {
        [styles.gray]: type == "notification",
        [styles.avatarColor]: type == "avatar",
      })}
      {...props}
    >
      {renderButton()}
      <div className={classNames(styles.alert, {
          [styles.message]: message
      })}></div>
    </button>
  );
};

export default Button;
