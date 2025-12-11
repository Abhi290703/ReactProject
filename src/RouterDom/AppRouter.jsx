import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Blog from "../pages/Blog";
import { UserForm } from "../Pages/UserForm";
import { Login } from "../Features/Login";
import { SignUp } from "../Features/Signup";
import Users from "../User/Users";
import DynamicRouting from "../dynamicRouting";
// import Timer from "../Pages/Timer";



// import UserData from "../User/UserData";



export default function AppRouter() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/userform" element={<UserForm/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/users" element={<Users/>} />
      {/* <Route path="/userdata" element={<UserData/>} /> */}
      <Route path="products/:id" element={<DynamicRouting/>} />
      {/* <Route path="/timer" element={<Timer/>} /> */}
    </Routes>
    </>
  );
}
