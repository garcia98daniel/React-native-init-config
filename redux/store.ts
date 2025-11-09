import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {generalsEffectsSlice} from './generalEffects/slice';
import IndexSagas from "./index-sagas";

const rootReducer = combineReducers({
  generalsEffects: generalsEffectsSlice.reducer,
});


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault({ thunk: false }).concat(sagaMiddleware),
  devTools: __DEV__,
});

sagaMiddleware.run(IndexSagas);

// Tipos (TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
