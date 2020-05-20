import React from "react";
import { useSelector } from "react-redux";
import FilterLink from "./filter-link";

const ToggleFilter: React.FC = () => {
  const filter = useSelector((store) => store.filter);

  return (
    <div>
      <FilterLink filter="ALL" label="ALL" disabled={filter === "ALL"} />
      <FilterLink
        filter="COMPLETED"
        label="COMPLETED"
        disabled={filter === "COMPLETED"}
      />
      <FilterLink
        filter="ACTIVE"
        label="ACTIVE"
        disabled={filter === "ACTIVE"}
      />
    </div>
  );
};

export default ToggleFilter;
