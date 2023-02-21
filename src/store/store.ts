import Vuex,{ StoreOptions} from "vuex";
import {IUser, user} from "./modules/user";
import {ICategories, categories} from "./modules/categories";
import {IBasket, basket} from "./modules/basket";

export interface RootState {
  user:IUser,
  categories:ICategories,
  basket:IBasket
}

const store: StoreOptions<RootState> = {
  modules:{
    user,
    categories,
    basket
  }
}

export default new Vuex.Store<RootState>(store)
