import {applyMiddleware, createStore} from "redux";

import rootReducer from "./reducers/root.reducer";
// import Logger from './middleware/logger'
// import Test from "./middleware/test";
// import Thunk from "./middleware/thunk";
// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
