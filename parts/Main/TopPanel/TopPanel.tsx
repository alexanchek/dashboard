import React, { FC } from "react";
import SmallCard from "../../../components/SmallCard/SmallCard";
import { mainCards } from "../../../helpers/dashboardCards/mainCards";

const TopPanel: FC = (): JSX.Element => {
  return (
    <>
      {mainCards.map(({ Icon, renderCase }, index) => {
        return (
          <>
            <SmallCard
              key={index}
              Icon={Icon}
              renderCase={renderCase}
              amount={1478286}
              percent="4.07"
            />
          </>
        );
      })}
    </>
  );
};

export default TopPanel;
