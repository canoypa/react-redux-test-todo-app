import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setFilter } from "../../../../actions/filter";
import { FilterStateType } from "../../../../store/reducer/filter/types";

type Props = {
  setFilter: (filter: FilterStateType) => void;
  filter: FilterStateType;
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

const dispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: FilterStateType) => dispatch(setFilter(filter)),
});

export default connect(null, dispatchToProps)(FilterLink);
