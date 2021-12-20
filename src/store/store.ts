import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as reducerCategory} from "./categoreisSlice";
import { reducer as reducerPopularCategories} from "./popularCategoriesSlice";
import { reducer as reducerSelectedCategory} from "./selectedCategorySlice";
import { reducer as reducerProduct} from "./ProductSlice";


const COUNTER_CART = {
  value: 0
}

const reducerCart = (state = COUNTER_CART) => {
  return state
}

const rootReducer = combineReducers({
  reducerCategory, 
  reducerPopularCategories, 
  reducerSelectedCategory, 
  reducerProduct, 
  reducerCart, 
 })

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>