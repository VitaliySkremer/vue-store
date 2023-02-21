import {onMounted, ref} from "vue";
import {IProduct} from "./useProducts";
import axios from "axios";

export const useGetProduct = (id:number) => {
  const product = ref<IProduct | null>(null)
  const loading = ref(false);

  const getProduct = () =>{
    loading.value = true;
    axios(`https://fakestoreapi.com/products/${id}`)
      .then(data=> product.value = data.data)
      .catch(error=> console.log(error))
      .finally(()=> loading.value = false)
  }

  onMounted(getProduct);

  return {
    product,
    loading
  }
}