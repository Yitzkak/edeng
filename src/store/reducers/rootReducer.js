import authReducer from './authReducer';
import incomemanagerReducer from './incomemanagerReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    income: incomemanagerReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
