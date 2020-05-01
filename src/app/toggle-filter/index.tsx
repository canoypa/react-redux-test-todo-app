import React from "react";
import { filterType } from "../types";
import FilterLink from "./filter-link";

type Props = {
  setFilter: React.Dispatch<filterType>;
  activeFilter: filterType;
};

const ToggleFilter: React.FC<Props> = ({ setFilter, activeFilter }) => (
  <div>
    <FilterLink
      setFilter={setFilter}
      filter={"ALL"}
      active={activeFilter === "ALL"}
      label="ALL"
    />
    <FilterLink
      setFilter={setFilter}
      filter={"COMPLETED"}
      active={activeFilter === "COMPLETED"}
      label="COMPLETED"
    />
    <FilterLink
      setFilter={setFilter}
      filter={"ACTIVE"}
      active={activeFilter === "ACTIVE"}
      label="ACTIVE"
    />
  </div>
);

export default ToggleFilter;
