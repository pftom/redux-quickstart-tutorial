import React from "react";
import Link from "./Link";
import { VisibilityFilters } from "./App";

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";

const Footer = ({ filter, dispatch }) => (
  <div>
    <span>Show: </span>
    <Link
      active={VisibilityFilters.SHOW_ALL === filter}
      onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}
    >
      All
    </Link>
    <Link
      active={VisibilityFilters.SHOW_ACTIVE === filter}
      onClick={() =>
        dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
      }
    >
      Active
    </Link>
    <Link
      active={VisibilityFilters.SHOW_COMPLETED === filter}
      onClick={() =>
        dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
      }
    >
      Completed
    </Link>
  </div>
);

export default connect()(Footer);
