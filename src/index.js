import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import  thunk  from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from './components/Firebase/firebase';
import rrfConfig from './components/Firebase/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import ReactReduxFirebaseProvider from 'react-redux-firebase/lib/ReactReduxFirebaseProvider'
//import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

const initialState = {};
/*const store = createStore(rootReducer, initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase)
    ));*/

    const store = createStore(rootReducer, initialState,
        compose(
            applyMiddleware(thunk),    
        ));

    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch, 
        createFirestoreInstance: createFirestoreInstance
    }


ReactDOM.render(
    <Provider store = {store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
