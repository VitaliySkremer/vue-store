import {onMounted, ref} from "vue";
import {IProduct} from "./useProducts";
import axios from "axios";

export const useGetBasket = (arrId: number[]) =>{
  const list = ref<IProduct[]>([])
  const loading = ref(false);

  const getBasket = () =>{
    loading.value = true;
    Promise.all(
      arrId.map(async item=>{
        const response = await axios(`https://fakestoreapi.com/products/${item}`)
        return response.data
      })
    ).then((data)=>{
        list.value = [...data]
      })
      .finally(()=>loading.value = false)
  }

  onMounted(getBasket)

  return {
    list,
    loading
  }
}