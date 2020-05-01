import React from "react";
import { filterType } from "../../types";

type Props = {
  onClick: (filter: filterType) => void;
  filter: filterType;
  disabled: boolean;
  label: string;
};

const FilterLink: React.FC<Props> = ({ onClick, filter, disabled, label }) => {
  const handler = {
    onClick: () => onClick(filter),
  };

  return (
    <button onClick={handler.onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default FilterLink;
