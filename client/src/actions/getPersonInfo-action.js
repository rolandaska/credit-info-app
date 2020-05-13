import axios from 'axios';
import {
    GET_PERSON_INFO_REQUEST,
    GET_PERSON_INFO_SUCCESS,
    GET_PERSON_INFO_FAILURE,
} from './types';

export const getPersonInfo = (id) => async (dispatch) => {
    try {
        // @desc GET Personal data
        dispatch({ type: GET_PERSON_INFO_REQUEST });
        const res = await axios.get(`/person/${id}`);
        dispatch({
            type: GET_PERSON_INFO_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_PERSON_INFO_FAILURE,
            payload:
                err.response.data ||
                'OPS! Something went wrong. Please contact our customer support service.',
        });
    }
};
