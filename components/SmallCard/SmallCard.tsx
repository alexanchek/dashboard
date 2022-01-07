import React, { FC } from "react";
import { CardProps } from "./SmallCard.props";
import styles from "./SmallCard.module.scss";
import { RenderText } from "./renderText";
import cn from "classnames";
import Htag from "../Htag/Htag";
import TrendUp from "../../helpers/trendsIcons/icons/trendUp.svg";
import TrendDown from "../../helpers/trendsIcons/icons/trendDown.svg";
import TrendZero from "../../helpers/trendsIcons/icons/trendZero.svg";
import CommonCard from "../CommonCard/CommonCard";

const SmallCard: FC<CardProps> = ({
  Icon,
  renderCase,
  amount,
  percent,
  className,
  ...props
}): JSX.Element => {
  return (
    <CommonCard className={cn(styles.box)} {...props}>
      {Icon}
      <div>
        <Htag tag={"h3"}>{amount.toLocaleString("ru")}</Htag>
        <div className={styles.title}>
          <RenderText renderCase={renderCase} />
        </div>
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
            </span>
            Last month
          </div>
        </div>
      </div>
    </CommonCard>
  );
};

export default SmallCard;
