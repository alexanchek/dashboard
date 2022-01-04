import React, { FC } from "react";
import { CardProps } from "./SmallCard.props";
import styles from "./SmallCard.module.scss";
import cn from "classnames";
import Htag from "../Header/Htag";

const SmallCard: FC<CardProps> = ({
  renderCase,
  amount,
  percent,
  className,
  ...props
}): JSX.Element => {
    console.log(renderCase);

  const renderText = (): JSX.Element => {
    switch (renderCase) {
      case "visits":
        return <>Total visits</>;
      default:
        return <>1</>;
    }
  };

  return (
    <div className={cn(styles.box)} {...props}>
      <Htag tag={"h3"}>{amount.toLocaleString('ru')}</Htag>
      <div className={styles.title}>{renderText()}</div>
      <div className={styles.text}>{percent}% Last month</div>
    </div>
  );
};

export default SmallCard;
