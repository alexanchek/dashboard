import React, { FC } from "react";
import SmallCard from "../../../components/SmallCard/SmallCard";
import { mainCards } from "../../../helpers/dashboardCards/mainCards";

const TopPanel: FC = (): JSX.Element => {
  return (
    <>
      {mainCards.map(({ Icon, renderCase }) => {
        return (
          <>
            <SmallCard
              key={renderCase}
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
