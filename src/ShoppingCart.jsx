import { useState, useEffect } from 'react';
import "./App.css"

const ShoppingCart = ({ currentItem }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [shoppingItem, setShoppingItem] = useState([]);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
   
  useEffect(() => {
    setShoppingItem((prevItem) => [...prevItem, currentItem]);
  }, [currentItem])

  return (
    <div className="basket-container">
      <h1 className="basket" onClick={toggleHidden}>
        🛒
      </h1>
      {isHidden ? null : (
        <div className="items">
          {shoppingItem.length > 0 ? (
            <div>
              <p>Your Shopping Cart:</p>
              <ol>
                {shoppingItem.map((item) => (
                  item.title && <li key={item.id}>{item.title}</li>
                ))}
              </ol>
              <button>Checkout</button>
            </div>
          ) : (
            <p>Empty basket</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
