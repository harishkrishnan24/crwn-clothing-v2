import logger from 'redux-logger';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
