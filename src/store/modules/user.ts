import axios from "axios";
import router from "../../router/router";
import {Module} from "vuex";
import {RootState} from "../store";

export interface IUser{
  auth:boolean;
  username:string;
  token:string;
  isChecked: boolean;
}


export const user:Module<IUser, RootState> = {
  state:()=> ({
    auth: false,
    username: '',
    token: '',
    isChecked: false,
  }),
  mutations:{
    auth(state, userData:IUser){
      state.auth = userData.auth;
      state.username = userData.username;
      state.token = userData.token;
    },
    checked(state, flag:boolean){
      state.isChecked = flag
    },
    outAuth(state){
      state.auth = false;
      state.username = '';
      state.token = '';
    }
  },
  actions:{
    login(context, user){
      context.commit('checked', true)
      axios.post('https://fakestoreapi.com/auth/login', user)
        .then(data=> {
          const userData = {
            auth: true,
            username: user.username,
            token: data.data.token
          }
          context.commit('auth',userData)
          router.push('/')
        })
        .catch((error)=> console.log(error))
        .finally(()=> context.commit('checked', false))
    }
  },
  namespaced: true
}