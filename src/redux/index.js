import { createStore, applyMiddleware ,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer";
import menuReducer from "./reducers/menuReducer";
import brandReducer from './reducers/brandReducer'
import productReducer from './reducers/productReducer'
import cartReducer from "./reducers/cartReducer";
import wishlistReducer from "./reducers/wishlistReducer";
import compareReducer from "./reducers/compareReducer";

//co

const persistConfig = {
  key: "primary",
  storage
};

const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  brand: brandReducer,
  product:productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function initializeStore() {
  return createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
