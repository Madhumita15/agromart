import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Translation keys matching JSON schemas
  const navItem = [
    { path: "/", key: "navbar.home" },
    { path: "/about", key: "navbar.about" },
    { path: "/productList", key: "navbar.products" },
    { path: "/contact", key: "navbar.contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-md ">
      <nav className="bg-yellow-400 relative p-2">
        <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo Section */}
          <NavLink
            to="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
          </NavLink>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center flex-1 justify-between ml-72">
            <ul className="flex items-center space-x-8">
              {navItem.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-800 border-b-4 border-green-700 text-lg font-bold pb-1 transition-all duration-200"
                        : "text-black text-lg font-semibold hover:text-green-700 transition-colors duration-200"
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Language select & Action utilities */}
            <div className="flex items-center space-x-4 ">
              <button className="hover:bg-white p-2 rounded-full text-white bg-green-700 hover:border-2 hover:border-green-700 hover:text-green-700 border-transparent transition-all duration-200 border-2" onClick={()=> navigate("/wishlist")}>
                <Heart  />
              </button>
              <button
                className="relative p-2 transition-transform active:scale-95 hover:border-2 hover:border-green-700 bg-green-700  hover:bg-green-50 rounded-full group border-2 border-transparent duration-200"
                onClick={() => navigate("/cart")}
              >
                {/* Shopping Cart Icon */}
                <ShoppingCart
                  size={24}
                  className=" text-white group-hover:text-green-700 transition-colors"
                />

                {/* Pure Notification Count Badge */}
                <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                  {t("cart.count", { count: 1 })}
                </span>
              </button>
              <button
                onClick={() => {
                  navigate("/becomeFarmer");
                  setMobileOpen(false);
                }}
                className="text-sm font-bold bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-white hover:border-2 hover:border-green-800 hover:text-green-800 border-2 border-transparent transition-all duration-200"
              >
                {t("navbar.becomeFarmer")}
              </button>

              <div className="relative">
                <select
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="bg-white border-2 border-emerald-100 hover:border-emerald-500 text-gray-700 font-semibold py-1.5 px-3 pr-8 rounded-xl text-sm focus:outline-none cursor-pointer shadow-sm transition-all appearance-none"
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা</option>
                  <option value="hi">हिन्दी</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={() => navigate("/login")}
                className="text-sm font-bold bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-white hover:border-2 hover:border-green-800 hover:text-green-800 border-2 border-transparent transition-all duration-200"
              >
                {t("navbar.login")}
              </button>
            </div>
          </div>

          {/* Mobile Menu Action Trigger Button */}
          <button
            id="menu-btn"
            className="lg:hidden text-black focus:outline-none p-2 rounded-md hover:bg-yellow-500 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel Container Layout */}
        {mobileOpen && (
          <div className="lg:hidden bg-yellow-400 border-t border-yellow-500 px-4 pt-2 pb-4 space-y-3 absolute top-full left-0 w-full shadow-lg z-50">
            <ul className="space-y-2">
              {navItem.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block bg-green-700 text-white font-bold text-md px-4 py-2.5 rounded-md"
                        : "block text-black hover:bg-yellow-500 font-semibold text-md px-4 py-2.5 rounded-md transition-colors"
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>

            <hr className="border-yellow-500" />

            {/* Mobile Actions, Utility bar & Inputs */}
            <div className="space-y-3 px-4">
               <button className="hover:bg-white p-2 rounded-full text-white bg-green-700 hover:border-2 hover:border-green-700 hover:text-green-700 border-2 border-transparent transition-all duration-200" onClick={()=> {
                navigate("/wishlist")
                setMobileOpen(false)
                }}>
                <Heart />
              </button>
                <button
                className="relative ml-5 p-2 transition-transform active:scale-95 hover:border-2 hover:border-green-700 bg-green-700  hover:bg-green-50 rounded-full group border-2 border-transparent  duration-200"
                onClick={() => navigate("/cart")}
              >
                {/* Shopping Cart Icon */}
                <ShoppingCart
                  size={24}
                  className=" text-white group-hover:text-green-700 transition-colors"
                />

                {/* Pure Notification Count Badge */}
                <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                  {t("cart.count", { count: 1 })}
                </span>
              </button>

              <button
                onClick={() => {
                  navigate("/becomeFarmer");
                  setMobileOpen(false);
                }}
                className="w-full text-center text-sm font-bold bg-green-800 text-white py-2.5 rounded-lg hover:bg-green-900 block"
              >
                {t("navbar.becomeFarmer")}
              </button>

              <div className="relative">
                <select
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="w-full bg-white border-2 border-emerald-100 hover:border-emerald-500 text-gray-700 font-semibold py-2 px-3 pr-8 rounded-xl text-sm focus:outline-none cursor-pointer shadow-sm transition-all appearance-none"
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা</option>
                  <option value="hi">हिन्दी</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
                className="w-full text-center text-sm font-bold bg-green-800 text-white py-2.5 rounded-lg hover:bg-green-900 block"
              >
                {t("navbar.login")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
