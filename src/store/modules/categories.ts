import {Module} from "vuex";
import {RootState} from "../store";
import axios from "axios";

export interface ICategories{
  list:string[];
  loading:boolean;
  activeCategories:string;
}

export const categories:Module<ICategories, RootState> = {
  state:()=>({
    list:[],
    loading: false,
    activeCategories:''
  }),
  mutations:{
    setCategories(state, data:string[]){
      state.list= [...state.list, ...data]
    },
    setLoading(state, flag:boolean){
      state.loading = flag;
    },
    setActiveCategories(state, value:string){
      state.activeCategories = value;
    }
  },
  getters:{
    categories(state){
      console.log(state.activeCategories)
      return state.activeCategories
    }
  },
  actions:{
    getCategories(context){
      context.commit('setLoading', true)
      axios('https://fakestoreapi.com/products/categories')
        .then(data=> context.commit('setCategories', data.data))
        .finally(()=> context.commit('setLoading', false))
    }
  },
  namespaced:true
}