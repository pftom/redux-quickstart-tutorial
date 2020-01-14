import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onClick: function () {
      return dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
