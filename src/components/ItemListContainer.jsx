import {products} from "../utils/products";
import {useState, useEffect} from "react";
import customFetch from "../utils/customFetch";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [data,setData] = useState([]);
    const {idCategory} = useParams();

    useEffect(() =>{
        if(idCategory) {
            customFetch(2000, products.filter(item => item.categoryId == idCategory)) 
              .then((response) => setData(response))
              .catch((err) => console.log(err));
          } else { 
            customFetch(2000, products)
            .then((response) => setData(response))
            .catch((err) => console.log(err));
          }}, [idCategory]); 
        
          return (
            <>
              {data.map((item) => (
                <ItemList
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  stock={item.stock}
                  price={item.price}
                  priceList={item.priceList}
                  thumbnail={item.thumbnail}
                  description={item.description}
                />
              ))}
            </>
          );
        };


export default ItemListContainer