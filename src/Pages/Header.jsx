import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
      : "text-gray-700 hover:text-indigo-600 transition";

  return (
    <>
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
          MyStore
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={linkClass}>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" className={linkClass}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/userform" className={linkClass}>
                UserForm  
              </NavLink>
            </li>

             <li>
              <NavLink to="/users" className={linkClass}>
                Users  
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}
