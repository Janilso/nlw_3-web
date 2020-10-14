import React from "react";

import "./styles.scss";

type typesCards = "blue" | "green" | "red";

interface CardInfoProps {
  title: string[];
  icon: any;
  typeCard?: typesCards;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  icon,
  typeCard = "blue",
}) => {
  return (
    <div className={`card-info card-type-${typeCard}`}>
      {icon}
      {title[0]}
      <br />
      {title[1]}
    </div>
  );
};

export default CardInfo;
