import {
    GET_AFFORDABILITY_RANGES_SUCCESS,
    GET_AFFORDABILITY_RANGES_FAILURE,
} from '../actions/types';

const initialState = {
    loading: true,
    error: '',
    affordability: { affordabilityMin: '', affordabilityMax: '' },
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_AFFORDABILITY_RANGES_SUCCESS:
            return {
                ...state,
                loading: false,
                affordability: {
                    affordabilityMin: payload.affordability_min.value,
                    affordabilityMax: payload.affordability_max.value,
                },
            };
        case GET_AFFORDABILITY_RANGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
