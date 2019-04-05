import { combineReducers } from 'redux';

import loginReducer from '../Screens/Entry/Login/Reducers/LoginReducer';

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;