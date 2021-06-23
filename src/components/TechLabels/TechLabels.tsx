import React from "react";
import "./TechLabels.scss";

interface Props {
  labelName: string;
}

const TechLabels = (props: Props) => {
  const { labelName } = props;

  return <span className="labels">{labelName}</span>;
};

export default TechLabels;
