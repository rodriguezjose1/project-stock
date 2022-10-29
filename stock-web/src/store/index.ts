import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { persistReducer, persistStore } from 'redux-persist';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

// Mount it on the Store
const store = configureStore({ 
    reducer: persistedReducer, 
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

// Run the saga
sagaMiddleware.run(rootSaga);

export { store };