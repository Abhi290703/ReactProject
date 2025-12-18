import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Toast from "./Toast";

export default function Header() {
  const [openToast, setOpenToast] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  // Show ONLY number of items (cartItems.length), not total quantity
  const itemCount = cartItems.length > 0 ? cartItems.length : null;

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1 relative"
      : "text-gray-700 hover:text-indigo-600 transition relative";

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
            MyStore
          </h1>

          <ul className="flex gap-8 text-lg font-medium">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/ProductMain" className={linkClass}>Products</NavLink></li>
            <li><NavLink to="/blog" className={linkClass}>Blog</NavLink></li>
            <li><NavLink to="/userform" className={linkClass}>UserForm</NavLink></li>
            <li><NavLink to="/users" className={linkClass}>Users</NavLink></li>
            <li>
              <NavLink to="/cart" className={linkClass}>
                Cart
                {itemCount !== null && (
                  <sup className="bg-red-500 text-white text-xs px-1 py-0.5 rounded-full ml-1">
                    {itemCount}
                  </sup>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Toast open={openToast} onClose={() => setOpenToast(false)} />
    </>
  );
}
