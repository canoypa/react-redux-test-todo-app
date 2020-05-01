import React from "react";
import { filterType } from "../../types";

type Props = {
  setFilter: React.Dispatch<filterType>;
  filter: filterType;
  active: boolean;
  label: string;
};

const FilterLink: React.FC<Props> = ({ setFilter, filter, active, label }) => {
  const handler = {
    setFilter: () => setFilter(filter),
  };

  return (
    <button onClick={handler.setFilter} disabled={active}>
      {label}
    </button>
  );
};

export default FilterLink;
