import React, { FC } from "react";
import { CardProps } from "./SmallCard.props";
import styles from "./SmallCard.module.scss";
import cn from "classnames";
import Htag from "../Htag/Htag";
import TrendUp from "../../helpers/trendsIcons/icons/trendUp.svg";
import TrendDown from "../../helpers/trendsIcons/icons/trendDown.svg";
import TrendZero from "../../helpers/trendsIcons/icons/trendZero.svg";

const SmallCard: FC<CardProps> = ({
  Icon,
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
      {Icon}
      <div>
        <Htag tag={"h3"}>{amount.toLocaleString("ru")}</Htag>
        <div className={styles.title}>{renderText()}</div>
        <div className={styles.bottom}>
          <div className={styles.trends}>
            {parseFloat(percent) > 0 ? (
              <TrendUp />
            ) : parseFloat(percent) === 0 ? (
              <TrendZero />
            ) : (
              <TrendDown />
            )}
          </div>
          <div className={styles.text}>
            <span
              className={cn(styles.percent, {
                [styles.green]: parseFloat(percent) > 0,
                [styles.yellow]: parseFloat(percent) === 0,
                [styles.red]: parseFloat(percent) < 0,
              })}
            >
              {percent}%
            </span>{" "}
            Last month
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
