import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import offerReducer from "./offer/offerSlice";
import formReducer from "./form/formSlice";

const rootReducer = combineReducers({
  user: userReducer,
  offer: offerReducer,
  form: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
