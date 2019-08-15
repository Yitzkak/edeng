import authReducer from './authReducer';
import incomemanagerReducer from './incomemanagerReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    income: incomemanagerReducer,
    firestore: firestoreReducer
});

export default rootReducer;
