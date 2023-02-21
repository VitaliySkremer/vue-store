import {onMounted, ref} from "vue";
import axios from "axios";

export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export const useProducts = (categories:string) => {
  const list = ref<IProduct[]>([]);
  const loading = ref(true);

  const getProducts = (categories:string) =>{
    loading.value = true;
    const categoriesValue = categories? `category/${categories}`:'';
    axios(`https://fakestoreapi.com/products/${categoriesValue}`)
      .then(data=> list.value = [...data.data])
      .catch(error=> console.log(error))
      .finally(()=> loading.value = false)
  }

  onMounted(()=>{
    getProducts(categories)
  })

  return{
    list,
    loading,
    getProducts
  }
}