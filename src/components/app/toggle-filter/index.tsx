import React from "react";
import FilterLink from "./filter-link";
import { connect } from "react-redux";
import { FilterStateType } from "../../../store/types";

type Props = {
  filter: FilterStateType;
};

const ToggleFilter: React.FC<Props> = ({ filter }) => {
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

const stateToProps = (state: any) => ({
  filter: state.filter,
});

export default connect(stateToProps)(ToggleFilter);
