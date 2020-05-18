import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../../actions/filter";
import { FilterStateType } from "../../../../store/reducer/filter/types";
import { setFilterAction } from "../../../../actions/filter/types";

type Props = {
  filter: FilterStateType;
  disabled: boolean;
  label: string;
};

const FilterLink: React.FC<Props> = ({ filter, disabled, label }) => {
  const dispatch = useDispatch<Dispatch<setFilterAction>>();

  const handler = {
    onClick: () => dispatch(setFilter(filter)),
  };

  return (
    <button onClick={handler.onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default FilterLink;
