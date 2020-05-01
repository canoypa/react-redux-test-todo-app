import React from "react";
import { filterType } from "../types";
import FilterLink from "./filter-link";

type Props = {
  setFilter: React.Dispatch<filterType>;
  activeFilter: filterType;
};

const ToggleFilter: React.FC<Props> = ({ setFilter, activeFilter }) => {
  const handler = {
    setFilter: (filter: filterType) => setFilter(filter),
  };

  return (
    <div>
      <FilterLink
        onClick={handler.setFilter}
        filter={"ALL"}
        disabled={activeFilter === "ALL"}
        label="ALL"
      />
      <FilterLink
        onClick={handler.setFilter}
        filter={"COMPLETED"}
        disabled={activeFilter === "COMPLETED"}
        label="COMPLETED"
      />
      <FilterLink
        onClick={handler.setFilter}
        filter={"ACTIVE"}
        disabled={activeFilter === "ACTIVE"}
        label="ACTIVE"
      />
    </div>
  );
};

export default ToggleFilter;
