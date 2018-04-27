import * as t from "../actionTypes";
import { apiCall } from "../../services/api";
import { addError } from "./errors";

export function fetchJobsSuccess(jobs) {
  return {
    type: t.FETCH_JOBS_SUCCESS,
    jobs
  };
}

export function fetchJobsFail(err) {
  return dispatch => {
    dispatch(addError(err));
  };
}

export function fetchJobsRequest() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_JOBS_REQUEST });
      const result = await apiCall("get", `/jobs`); // API CALL
      /**
       * {
       *   data: [
       *     { title: 'Software Engineer' }
       *  ]
       * }
       */
      dispatch(fetchJobsSuccess(result.data));
    } catch (err) {
      dispatch(fetchJobsFail(err));
      return Promise.reject();
    }
  };
}
