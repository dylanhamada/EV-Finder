import * as actionTypes from "../actions/actionTypes";
import browseState from "../state/browse";
// import { updateObject } from "../../shared/utility";

const initialState = browseState;

const browseFilter = (state, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BROWSE_FILTER:
      return browseFilter(state, action);
    default:
      return state;
  }
};

export default reducer;
