import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const AdminWrapper = () => {
  return (
    <>
    <div className="flex flex-col">
        <div className="p-5 bg-blue-950">
            <Navbar />
        </div>
        <div className="flex flex-row w-[100%]">
            <div className="w-[20%] bg-gray-800 h-screen fixed left-0  text-white p-3">
                 <Sidebar />
            </div>
            <div className="w-[80%]">
                <Outlet />
            </div>
           
            
        </div>
    </div>
    </>
  )
}

export default AdminWrapper