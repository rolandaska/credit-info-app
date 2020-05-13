import {
    GET_EXPOSURE_VALUES_SUCCESS,
    GET_EXPOSURE_VALUES_FAILURE,
} from '../actions/types';

const initialState = {
    loading: false,
    error: '',
    exposureValues: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EXPOSURE_VALUES_SUCCESS:
            return {
                ...state,
                loading: false,
                exposureValues: payload.values,
            };
        case GET_EXPOSURE_VALUES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
