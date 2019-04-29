import { combineReducers } from "redux"

import loginReducer from '../Screens/Entry/Login/Reducers/LoginReducer';
import listingReducer from '../Screens/Tabs/Listing/Reducer/listingreducer';
import BrowseReducer from '../Screens/Tabs/Browse/Reducers/BrowseReducer';
import userReducer from '../Screens/Profile/Reducer/userReducer';



const rootReducer = combineReducers({
    browse: BrowseReducer,
    login: loginReducer,
    listing: listingReducer,
    user : userReducer
});

export default rootReducer;