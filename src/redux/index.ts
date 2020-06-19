import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './ducks'
import { thunkMiddleware, probablityMiddleware } from './middlewares'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ducks'

const defaultMiddleware = getDefaultMiddleware({
  thunk: true,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [
    ...defaultMiddleware,
    probablityMiddleware,
    thunkMiddleware,
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
