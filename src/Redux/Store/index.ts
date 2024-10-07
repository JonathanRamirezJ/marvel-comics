import { configureStore } from "@reduxjs/toolkit";
import { combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { GetListComicsSlice } from "../GetListComics/GetListComics.slice";
import { GetComicIdSlice } from "../GetComicId/GetComicId.slice";

const rootReducer = combineReducers({
  [GetListComicsSlice.name]: GetListComicsSlice.reducer,
  [GetComicIdSlice.name]: GetComicIdSlice.reducer
});

const persistConfig = {
  key: "Marvel-Comic",
  storage,
  whitelist:[]
};

const persistReducerConfig = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducerConfig,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;