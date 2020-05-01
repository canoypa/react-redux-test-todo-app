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
        active={activeFilter === "ALL"}
        label="ALL"
      />
      <FilterLink
        onClick={handler.setFilter}
        filter={"COMPLETED"}
        active={activeFilter === "COMPLETED"}
        label="COMPLETED"
      />
      <FilterLink
        onClick={handler.setFilter}
        filter={"ACTIVE"}
        active={activeFilter === "ACTIVE"}
        label="ACTIVE"
      />
    </div>
  );
};

export default ToggleFilter;
