import * as types from '../Actions/types';

const INITIAL_STATE = {
    isFetching: false,
    user: {},
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.FETCH_USER_DATA:
            return {
                ...state,
                isFetching: true
            };
            break;

        case types.FETCH_USER_DATA_SUCCESS:
            console.log('Fetch ITEM success');
            console.log(action.payload);
            return {
                ...state,
                user: [...state.user, action.payload],
                isFetching: false
            };
            break;

        case types.FETCH_USER_DATA_FAILURE:
            console.log(action.payload);
            return { ...state, comments: [], isFetching: false };
            break;

        default:
            return state;
    }
};