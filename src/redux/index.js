import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer} from "redux-persist";
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
    product: productReducer,
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


<blockquote className="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a
    href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a
    href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a
    href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a
    href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a
    href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>