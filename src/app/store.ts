import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

import userReducer from "../features/userSlice";
import serverSlice from "../features/trafficSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
  blacklist: [],
};

const reducer = combineReducers({
  user: userReducer,
  server: serverSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
