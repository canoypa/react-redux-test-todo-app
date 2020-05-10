import React from "react";
import { FilterType } from "../../types";

type Props = {
  setFilter: (filter: FilterType) => void;
  filter: FilterType;
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
