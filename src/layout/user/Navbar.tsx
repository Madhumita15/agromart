import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  // কৃষক থেকে ক্রেতা সিস্টেমের জন্য বাংলা মেনু
  const navItem = [
    { path: "/", name: "হোম" },
    { path: "/about", name: "আমাদের সম্পর্কে" },
    { path: "/productList", name: "পণ্যসমূহ" },
    { path: "/contact", name: "যোগাযোগ" },
  ]

  return (
    <header className="w-full sticky top-0 z-50 shadow-md ">
      <nav className="bg-yellow-400 relative p-2">
        <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          
          {/* লোগো সেকশন */}
          <NavLink to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
          </NavLink>

          {/* ডেস্কটপ নেভিগেশন মেনু (বড় স্ক্রিনের জন্য) */}
          <div className="hidden lg:flex items-center flex-1 justify-between ml-40">
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
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* অনুসন্ধান এবং লগইন সেকশন */}
            <div className="flex items-center space-x-4 ">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center ">
                <input 
                  type="search" 
                  placeholder="পণ্য খুঁজুন..."
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600 w-48 xl:w-64"
                />
                <button 
                  type="submit"
                  className="bg-green-700 text-white px-4 py-1.5 text-sm rounded-r-md hover:bg-green-800 transition-colors duration-200"
                >
                  খুঁজুন
                </button>
              </form>
              <button onClick={()=> {navigate("/becomeFarmer");setMobileOpen(false)}}  className="text-sm font-bold bg-green-800 text-white  px-5 py-2 rounded-lg hover:bg-white hover:border-2 hover:border-green-800 hover:text-green-800 border-2 border-transparent transition-all duration-200">কৃষক হোন</button>

              <button 
                onClick={() => navigate("/login")} 
                className="text-sm font-bold bg-green-800 text-white  px-5 py-2 rounded-lg hover:bg-white hover:border-2 hover:border-green-800 hover:text-green-800 border-2 border-transparent transition-all duration-200"
              >
                লগইন
              </button>
            </div>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <button 
            id="menu-btn" 
            className="lg:hidden text-black focus:outline-none p-2 rounded-md hover:bg-yellow-500 transition-colors" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* মোবাইল ড্রপডাউন মেনু (ছোট স্ক্রিনের জন্য) */}
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
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <hr className="border-yellow-500" />

            {/* মোবাইলে অনুসন্ধান এবং লগইন */}
            <div className="space-y-3 px-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full">
                <input 
                  type="search" 
                  placeholder="পণ্য খুঁজুন..."
                  className="px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600 flex-1"
                />
                <button 
                  type="submit"
                  className="bg-green-700 text-white px-4 py-2 text-sm rounded-r-md hover:bg-green-800"
                >
                  খুঁজুন
                </button>
              </form>

              <button onClick={()=> {navigate("/becomeFarmer");setMobileOpen(false)}} className="w-full text-center text-sm font-bold bg-green-800 text-white py-2.5 rounded-lg hover:bg-green-900 block">কৃষক হোন</button>

              <button 
                onClick={() => { navigate("/login"); setMobileOpen(false); }} 
                className="w-full text-center text-sm font-bold bg-green-800 text-white py-2.5 rounded-lg hover:bg-green-900 block"
              >
                লগইন
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar