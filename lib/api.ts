import { supabase } from "./supabase";

export const fetchProducts = async () => {
      const {data , error} = await supabase.from('Productos').select('*').order('created_at',{ascending:false,});

      if(error){
        console.log(error);
        return[];
      }else{
        return data;
      }
    };

export type Productos = Awaited <ReturnType<typeof fetchProducts>>;