import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import productsReducer from "./products/reducer";
import salesReducer from "./sales/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  sales: salesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;