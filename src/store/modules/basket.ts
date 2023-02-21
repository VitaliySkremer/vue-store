import {Module} from "vuex";
import {RootState} from "../store";

export interface IBasket {
  basket:number[];
  loading:boolean;
}

export const basket: Module<IBasket, RootState> = {
  state:()=>({
    basket:[],
    loading:false
  }),
  mutations:{
    addInBasket(state, id:number){
      state.basket.push(id);
    },
    deleteOutBasket(state, id:number){
      state.basket = state.basket.filter(item=> item!==id);
    },
    setLoading(state,flag:boolean){
      state.loading = flag;
    }
  },
  namespaced:true
}