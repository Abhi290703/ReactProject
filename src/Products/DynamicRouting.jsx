import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/cart/cartSlice";
import { addToCart } from "../Redux/cart/CartSlice";


export default function DynamicRouting() {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setSingleProduct(data);
    }
    fetchProduct();
  }, [id]);

  // ✅ loading guard
  if (!singleProduct.id) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">

          <div className="w-full md:w-1/2">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="h-96 w-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {singleProduct.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {singleProduct.description}
            </p>

            <p className="text-2xl font-semibold text-indigo-600 mb-2">
              ₹ {singleProduct.price}
            </p>

            <p className="text-yellow-500 mb-4">
              Rating: {singleProduct.rating}
            </p>

            <button
              onClick={() => dispatch(addToCart(singleProduct))}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg mr-4"
            >
              Add to Cart
            </button>

            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
