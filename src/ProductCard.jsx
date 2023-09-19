const ProductCard = ({ productData, getShoppingItem }) => {

  const onClickHandler = () => {
    getShoppingItem(productData);
  }

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={productData.thumbnail} alt={productData.title} />
      </div>
      <div className="product-card-details">
        <h2 className="name">{productData.title}</h2>
        <p className="price">Price: ${productData.price}</p>
        <p className="rating">Rating: {productData.rating}</p>
        <p className="brand">Brand: {productData.brand}</p>
        <p className="discount">Discount: {productData.discountPercentage}%</p>
        <button id={productData.id} onClick={onClickHandler}>
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
