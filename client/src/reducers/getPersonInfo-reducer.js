import {
    GET_PERSON_INFO_REQUEST,
    GET_PERSON_INFO_SUCCESS,
    GET_PERSON_INFO_FAILURE,
} from '../actions/types';

const initialState = {
    loading: false,
    error: '',
    personInfo: '',
    personAffId: '',
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PERSON_INFO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_PERSON_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                personInfo: payload,
                personAffId: payload.affordability_id,
            };
        case GET_PERSON_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                personAffId: '',
            };
        default:
            return state;
    }
}
