import React from "react";

import "./styles.scss";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title = "" }) => {
  return <legend className="title">{title}</legend>;
};

export default Title;
