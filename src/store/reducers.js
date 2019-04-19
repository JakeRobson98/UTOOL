import { combineReducers } from 'redux';

import loginReducer from '../Screens/Entry/Login/Reducers/LoginReducer';
import listingReducer from '../Screens/Tabs/Listing/Reducer/listingreducer';

const rootReducer = combineReducers({
    login: loginReducer,
    listing: listingReducer
});

export default rootReducer;