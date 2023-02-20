import Vuex,{ StoreOptions} from "vuex";
import {IUser, user} from "./modules/user";
import {ICategories, categories} from "./modules/categories";

export interface RootState {
  user:IUser,
  categories:ICategories
}

const store: StoreOptions<RootState> = {
  modules:{
    user,
    categories
  }
}

export default new Vuex.Store<RootState>(store)
