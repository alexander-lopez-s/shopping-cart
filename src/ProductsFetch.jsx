import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductsFetch = ({getShoppingItem}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = "https://dummyjson.com/products";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="stock-container">
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} getShoppingItem={getShoppingItem}/> 
      ))}
    </div>
  );
};

export default ProductsFetch;
