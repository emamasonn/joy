import React from "react";

type Props = {
  svg: string;
};

const Icon = ({ svg }: Props) => {
  return <img src={require(svg)} alt="icon" />;
};

export default Icon;
