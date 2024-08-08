import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducers/appSlice";
import userReducer, { setToken } from "../reducers/userSlice";
import { axiosJwt, refreshToken } from "@/service";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import topProductsReducer, { getTopProductsApi } from "../reducers/topProducts";
import categoriesReducer, { getCategoriesApi } from "../reducers/categoriesSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users'],
};

const rootReducer = combineReducers({
  app: appReducer,
  users: userReducer,
  topProducts: topProductsReducer,
  categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:  {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PURGE'],
        ignoredActionPaths: ['register', 'rehydrate'],
        ignoredPaths: ['register', 'rehydrate'],
      } ,
    }),
});

// Überprüfen Sie den State des Users Reducer
store.subscribe(() => {
  console.log('Store state:', store.getState());
});

store.dispatch(getCategoriesApi());
store.dispatch(getTopProductsApi());


axiosJwt.interceptors.request.use(async (config) => {
  const currentDate = new Date();
  const exp = localStorage.getItem("exp");
  if (exp && Number(exp) * 1000 > currentDate.getTime()) {
    const response = await refreshToken();
    config.headers.Authorization = `Bearer ${response.data.refreshToken}`;
    store.dispatch(setToken(response.data.refreshToken));
  }
  return config;
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

// Debugging, um den Persistor State zu überprüfen
persistor.subscribe(() => {
  console.log('Persistor state changed:', persistor.getState());
});

export default store;
