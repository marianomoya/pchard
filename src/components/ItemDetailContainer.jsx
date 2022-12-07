import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    customFetch(2000, products.find(item => item.id === parseInt(idProduct)))
          .then(result => setData(result))
          .catch(err => console.log(err))
  }, []);
  
  return (
      <ItemDetail item={data} />
  );
}


export default ItemDetailContainer;