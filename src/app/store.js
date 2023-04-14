import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

import userReducer from "../features/userSlice";
import trafficSlice from "../features/trafficSlice";
import routeSlice from "../features/routeSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
  blacklist: [],
};

const reducer = combineReducers({
  user: userReducer,
  traffic: trafficSlice,
  route: routeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
