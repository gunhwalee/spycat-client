import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  PreloadedState
} from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

import userReducer from "../features/userSlice";
import serverReducer from "../features/trafficSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
  blacklist: [],
};

const reducer = combineReducers({
  user: userReducer,
  server: serverReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
    preloadedState
  });
}

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default store;
