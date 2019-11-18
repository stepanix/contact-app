import { createStore, applyMiddleware } from 'redux';
import reducers from '../Reducers/index';
import createSagaMiddleware from 'redux-saga';
import appWatcherSagas from '../Sagas';

/**
 * Create redux-saga middleware. The redux-saga middleware is used for application side effects.
 * e.g of side effects are asynchronous requests for data fetching, accessing browser caching, etc
 * Advantages are they are easier to manage, more efficient to execute, easy to test, and better at handling failures.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * connect application store to saga middleware.
 */
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

/**
 * use middleware to startup saga watchers (appWatcherSagas).
 * Refer to the index file in the Sagas folder for more information on watchers.
 */
sagaMiddleware.run(appWatcherSagas);

export default store;