import React, { FC } from "react";
import { CardProps } from "./SmallCard.props";
import styles from "./SmallCard.module.scss";
import cn from "classnames";
import Htag from "../Header/Htag";

const SmallCard: FC<CardProps> = ({
  Icon,
  TrendIcon,
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
      case "articles":
        return <>Total articles</>;
      case "subscriptions":
        return <>Total subscriptions</>;
      case "authors":
        return <>Total authors</>;
      default:
        return <></>;
    }
  };

  return (
    <div className={cn(styles.box)} {...props}>
      <Icon />
      <div>
        <Htag tag={"h3"}>{amount.toLocaleString("ru")}</Htag>
        <div className={styles.title}>{renderText()}</div>
        <div className={styles.bottom}>
          <div className={styles.trends}>
            <TrendIcon />
          </div>
          <div className={styles.text}>
            <span className={styles.percent}>{percent}%</span> Last month
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
