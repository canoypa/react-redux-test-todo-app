import React from "react";
import { filterType } from "../../types";

type Props = {
  onClick: (filter: filterType) => void;
  filter: filterType;
  active: boolean;
  label: string;
};

const FilterLink: React.FC<Props> = ({ onClick, filter, active, label }) => {
  const handler = {
    onClick: () => onClick(filter),
  };

  return (
    <button onClick={handler.onClick} disabled={active}>
      {label}
    </button>
  );
};

export default FilterLink;
