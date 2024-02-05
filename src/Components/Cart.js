import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // dispatch action to clear the cart in Redux
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h2 className="font-bold text-xl">CART</h2>
      <div className="w-6/12 m-auto">
        <button
          className="border border-black rounded-lg bg-green-200 text-black font-bold p-2 m-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="m-4 p-4">Cart is empty , Add Items to cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
