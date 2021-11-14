import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import book from "./book";
import thema from "./thema";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["book"],
};

const rootReducer = combineReducers({ book, thema });

export default persistReducer(persistConfig, rootReducer);
