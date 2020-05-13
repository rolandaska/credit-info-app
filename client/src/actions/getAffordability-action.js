import axios from "axios";
import {
  GET_AFFORDABILITY_RANGES_REQUEST,
  GET_AFFORDABILITY_RANGES_SUCCESS,
  GET_AFFORDABILITY_RANGES_FAILURE,
} from "./types";

export const getAffordabilityById = (id) => async (dispatch) => {
  try {
    // @desc GET affordability min-max ranges. Expecting to get "affordability_id"
    dispatch({ type: GET_AFFORDABILITY_RANGES_REQUEST });
    const res = await axios.get(`/affordability/${id}`);
    dispatch({
      type: GET_AFFORDABILITY_RANGES_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: GET_AFFORDABILITY_RANGES_FAILURE,
      payload:
        err.response.data ||
        "OPS! Something went wrong. Please contact our customer support service.",
    });
  }
};
