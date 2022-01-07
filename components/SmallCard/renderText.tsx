import React, { FC } from "react";
import { IRenderCase } from "./SmallCard.props";

export const RenderText: FC<IRenderCase> = ({renderCase}): JSX.Element => {
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