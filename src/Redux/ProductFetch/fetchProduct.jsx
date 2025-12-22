import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSlice } from "./fetchSlice";
    

export const FetchProduct = () => {
  
  const { products, loading, error } = useSelector(
    (state) => state.Productnames
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchSlice());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                {product.title}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-indigo-600">
                  ₹ {product.price}
                </span>

                <button className="bg-indigo-600 text-white text-sm px-3 py-1 rounded hover:bg-indigo-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
