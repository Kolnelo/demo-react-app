import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {cartProducts} from './reducers';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type || 'thunk');
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const storeFactory = (initialState = {}) => (
    createStore( combineReducers({ cartProducts }),
                 initialState,
                 applyMiddleware(logger, thunk)
    ));

export default storeFactory;