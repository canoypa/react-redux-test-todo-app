import React from "react";
import { filterType } from "../../types";

type Props = {
  setFilter: (filter: filterType) => void;
  filter: filterType;
  disabled: boolean;
  label: string;
};

const FilterLink: React.FC<Props> = ({
  setFilter,
  filter,
  disabled,
  label,
}) => {
  const handler = {
    onClick: () => setFilter(filter),
  };

  return (
    <button onClick={handler.onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default FilterLink;
