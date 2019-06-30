import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import displayReducer from './Reducers/display';
import { reducer } from './Reducers/search';

const rootReducer = combineReducers({
    src: reducer,
    dis: displayReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;