import React from "react";
import Link from "./Link";
import { VisibilityFilters } from "./App";

const Footer = ({ filter, setVisibilityFilter }) => (
  <div>
    <span>Show: </span>
    <Link
      active={VisibilityFilters.SHOW_ALL === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}
    >
      All
    </Link>
    <Link
      active={VisibilityFilters.SHOW_ACTIVE === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}
    >
      Active
    </Link>
    <Link
      active={VisibilityFilters.SHOW_COMPLETED === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}
    >
      Completed
    </Link>
  </div>
);

export default Footer;
