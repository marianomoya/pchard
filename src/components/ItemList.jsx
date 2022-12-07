import { Link } from "react-router-dom";

const Product = ({ id, title, price, stock, thumbnail, description }) => {
  return (
    <>
      {
        <article className="pCard">
          <img
            src={thumbnail}
            alt="Imagen del producto"
            className="productImg"
          />
          <p className="productStock">Stock: {stock}</p>
          <div className="productContent">
            <h3 className="productTitle">{title}</h3>
            <p className="productPrice">
              <span className="priceTag">Precio: </span> $ {price}
            </p>
          </div>
          <Link to={`/productDetail/${id}`}>
            <button type="button" className="btn productDetailBtn">
              Ver Más
            </button>
          </Link>
        </article>
      }
    </>
  );
};

export default Product;