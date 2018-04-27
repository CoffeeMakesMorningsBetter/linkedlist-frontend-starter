import * as t from "../actionTypes";

const DEFAULT_STATE = [];

/**
 * {
 *    user: {}
 *    jobs: []
 * }
 */

function jobsReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_JOBS_SUCCESS:
      return [...action.jobs];
    default:
      return state;
  }
}

export default jobsReducer;