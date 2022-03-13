import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import { watcherSaga } from './sagas/rootSaga';

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, {}, enhancers);

sagaMiddleware.run(watcherSaga);

export default store;
