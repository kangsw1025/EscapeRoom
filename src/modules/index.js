import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import book from "./book";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["book"],
};

const rootReducer = combineReducers({ book });

export default persistReducer(persistConfig, rootReducer);
