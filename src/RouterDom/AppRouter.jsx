// import { Routes, Route } from "react-router-dom";
// import Home from "../Pages/Home";
// import Blog from "../pages/Blog";
// import { UserForm } from "../Pages/UserForm";
// import { Login } from "../Features/Login";
// import { SignUp } from "../Features/Signup";
// import Users from "../User/Users";
// import Toast from "../pages/Toast";
// // import Product from "../Products/product";
// import DynamicRouting from "../Products/DynamicRouting";
// import ProductDetails from "../Products/productDetails";
// import { ProductMain } from "../Pages/ProductMain";



// export default function AppRouter() {
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/productmain" element={<ProductMain/>} />
//       <Route path="/product" element={<ProductDetails/>} />
//       <Route path="/blog" element={<Blog/>} />
//       <Route path="/userform" element={<UserForm/>} />
//       <Route path="/signup" element={<SignUp/>} />
//       <Route path="/login" element={<Login/>} />
//       <Route path="/users" element={<Users/>} />
//       <Route path="productDetails/:id" element={<DynamicRouting/>} />
//       <Route path="/toast" element={<Toast/>}/>
//     </Routes>
//     </>
//   );
// }






import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../pages/Blog";
import { UserForm } from "../Pages/UserForm";
import { Login } from "../Features/Login";
import { SignUp } from "../Features/Signup";
import Users from "../User/Users";
import Toast from "../pages/Toast";
import DynamicRouting from "../Products/DynamicRouting";
import ProductDetails from "../Products/productDetails";
import { ProductMain } from "../Pages/ProductMain";
import Cart from "../Redux/cart/Cart";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Product Listing */}
      <Route path="/products" element={<ProductDetails />} />

      {/* Product Details */}
      <Route path="/products/:id" element={<DynamicRouting />} />

      <Route path="/productmain" element={<ProductMain />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/userform" element={<UserForm />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/toast" element={<Toast />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
