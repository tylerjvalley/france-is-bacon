import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import displayReducer from './Reducers/display';
import searchReducer from './Reducers/search';

const rootReducer = combineReducers({
    src: searchReducer,
    dis: displayReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;