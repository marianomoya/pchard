
const ProductDetail = ({ item }) => {
  return (
    <>
       <section className="detailMainContainer">
        <article className="detailCard">
          <h2 className="detailTitle">{item.title}</h2>
          <div className="detailContent">
            <img
              src={item.thumbnail}
              alt="Imagen del producto"
              className="detailImg"
            />
            <div className="detailAvailability">
              <div className="detailTextDiv">
                <p className="detailContentText">
                  <span className="detailContentSpan">Precio en Efectivo: </span>{" "}
                  <span className="detailPriceSimbol">$</span>
                  {item.price}
                </p>
              </div>
              <div className="detailTextDiv">
                <p className="detailContentText">
                  <span className="detailContentSpan">Precio con Tarjeta:</span>{" "}
                  <span className="detailPriceSimbol">$</span>
                  {item.priceList}
                </p>
              </div>
              <div className="detailTextDiv">
                <p className="detailContentText">
                  <span className="detailContentSpan">Stock:</span> {item.stock}
                </p>
              </div>
              <div className="detailTextDiv">
                <p className="detailContentText">
                  <span className="detailContentSpan">Garantía:</span> {item.warranty}
                </p>
              </div>
              <div className="detailTextDiv">
                <p className="detailContentText">
                  <span className="detailContentSpan">Retiro:</span> Gratis!
                </p>
                <p className="detailContentTextShip">
                  San Miguel de Tucuman - Tucuman
                </p>
              </div>
              <div className="detailDescriptionDiv">
                <h3 className="detailDescriptionTitle">
                  Descripción del <span className="detailPriceSimbol"> Producto</span>
                </h3>
                <p className="detailContentText">{item.description}</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProductDetail;