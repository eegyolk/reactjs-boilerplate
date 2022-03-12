import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import { watcherSaga } from './sagas/rootSaga';

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;
