import {Module} from "vuex";
import {RootState} from "../store";

interface ISelectProduct {
  id:number;
  price:number;
}

export interface IBasket {
  basket:number[];
  loading:boolean;
  selectProduct:ISelectProduct[]
}

export const basket: Module<IBasket, RootState> = {
  state:()=>({
    basket:[],
    loading:false,
    selectProduct:[]
  }),
  mutations:{
    addInBasket(state, id:number){
      state.basket.push(id);
    },
    deleteOutBasket(state, id:number){
      state.basket = state.basket.filter(item=> item!==id);
    },
    addSelectProduct(state, product:ISelectProduct){
      state.selectProduct.push(product)
    },
    deleteSelectProduct(state, id:number){
      state.selectProduct = state.selectProduct.filter(item=> item.id !== id)
    },
    setLoading(state,flag:boolean){
      state.loading = flag;
    }
  },
  namespaced:true
}