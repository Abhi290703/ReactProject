import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} from "../cart/CartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <h2 className="text-center mt-10">Cart is empty</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 bg-white p-4 mb-4 rounded shadow"
        >
          {/* IMAGE */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-24 h-24 object-cover rounded"
          />

          {/* DETAILS */}
          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>

            {/* QUANTITY CONTROLS */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>

              <span className="font-semibold">{item.qty}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <p className="mt-2 font-bold">
              ₹ {item.price * item.qty}
            </p>
          </div>

          {/* REMOVE */}
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={() => dispatch(clearCart())}
        className="bg-black text-white px-6 py-2 rounded mt-4"
      >
        Clear Cart
      </button>
    </div>
  );
}
