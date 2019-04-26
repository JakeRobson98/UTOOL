import { combineReducers } from "redux"

import loginReducer from '../Screens/Entry/Login/Reducers/LoginReducer';
import listingReducer from '../Screens/Tabs/Listing/Reducer/listingreducer';
import BrowseReducer from '../Screens/Tabs/Browse/Reducers/BrowseReducer';


const rootReducer = combineReducers({
    browse: BrowseReducer,
    login: loginReducer,
    listing: listingReducer,
});

export default rootReducer;