import * as types from '../actions/types';

const initialState = {
    loading: false,
    error: '',
    personInfo: '',
    personAffId: '',
    affordability: { affordabilityMin: '', affordabilityMax: '' },
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_PERSON_INFO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.GET_PERSON_INFO_SUCCESS:
            return {
                ...state,
                personInfo: payload,
                personAffId: payload.affordability_id,
            };
        case types.GET_PERSON_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_AFFORDABILITY_RANGES_SUCCESS:
            return {
                ...state,
                affordability: {
                    affordabilityMin: payload.affordability_min.value,
                    affordabilityMax: payload.affordability_max.value,
                },
            };
        case types.GET_AFFORDABILITY_RANGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_EXPOSURE_VALUES_SUCCESS:
            return {
                ...state,
                loading: false,
                exposureValues: payload,
            };
        case types.GET_EXPOSURE_VALUES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
