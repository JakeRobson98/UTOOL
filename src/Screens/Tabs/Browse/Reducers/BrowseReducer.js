import * as types from '../Actions/types';


const INITIAL_STATE = {
    isFetching: false,
    items: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.FETCH_ITEM:
            return {
                ...state,
                isFetching: true
            };

        case types.FETCH_ITEM_SUCCESS:
            console.log('Fetch ITEM success');
            console.log(action.payload.items);
            return {
                ...state,
                items: [...state.items, action.payload.items],
                isFetching: false
            };
            break;

        case types.FETCH_ITEM_FAILURE:
            console.log(action.payload);
            return { ...state, comments: [], isFetching: false };
            break;

        default:
            return state;
    }
};