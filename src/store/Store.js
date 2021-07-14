import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signInReducer} from '../reducers/ReducerSign'

const enhancer = compose(
    applyMiddleware(
        thunk,
        createLogger({
            predicate: () => __DEV__,
        }),
    ),
);

const persistConfig = {
    key: 'root',
    timeout: 0,
    storage: AsyncStorage,
    whitelist: ['data','signupData','profile','array']
};

const persistedReducer = persistReducer(persistConfig, signInReducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);