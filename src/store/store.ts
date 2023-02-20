import Vuex,{ StoreOptions} from "vuex";
import {IUser, user} from "./modules/user";

export interface RootState {
  user:IUser
}

const store: StoreOptions<RootState> = {
  modules:{
    user
  }
}

export default new Vuex.Store<RootState>(store)
