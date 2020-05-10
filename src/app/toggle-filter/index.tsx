import React from "react";
import { FilterType } from "../types";
import FilterLink from "./filter-link";

type Props = {
  setFilter: (filter: FilterType) => void;
  activeFilter: FilterType;
};

const ToggleFilter: React.FC<Props> = ({ setFilter, activeFilter }) => {
  return (
    <div>
      <FilterLink
        setFilter={setFilter}
        filter={"ALL"}
        disabled={activeFilter === "ALL"}
        label="ALL"
      />
      <FilterLink
        setFilter={setFilter}
        filter={"COMPLETED"}
        disabled={activeFilter === "COMPLETED"}
        label="COMPLETED"
      />
      <FilterLink
        setFilter={setFilter}
        filter={"ACTIVE"}
        disabled={activeFilter === "ACTIVE"}
        label="ACTIVE"
      />
    </div>
  );
};

export default ToggleFilter;
