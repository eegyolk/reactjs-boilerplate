import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import aboutReducer from '../Pages/About/reducer';
import portfolioReducer from '../Pages/Portfolio/reducer';
import { watcherSaga } from './rootSaga';

const reducers = combineReducers({
  about: aboutReducer,
  portfolio: portfolioReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, {}, enhancers);

sagaMiddleware.run(watcherSaga);

export default store;
