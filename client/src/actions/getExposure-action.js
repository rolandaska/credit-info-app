import axios from "axios";
import {
  GET_EXPOSURE_VALUES_REQUEST,
  GET_EXPOSURE_VALUES_SUCCESS,
  GET_EXPOSURE_VALUES_FAILURE,
} from "./types";

export const getExposureValues = (id) => async (dispatch) => {
  try {
    //@desc GET exposure values
    dispatch({ type: GET_EXPOSURE_VALUES_REQUEST });
    const res = await axios.get(`/exposure/${id}`);
    dispatch({
      type: GET_EXPOSURE_VALUES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_EXPOSURE_VALUES_FAILURE,
      payload:
        err.response.data ||
        "OPS! Something went wrong. Please contact our customer support service.",
    });
  }
};
