import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminWrapper = () => {
  return (
    <div className="flex min-h-screen w-full bg-[#dddfc3]">
      <aside className="w-[305px] bg-gradient-to-r from-[#DE9E36] via-[#B3BF00] to-[#4C5200] h-screen fixed left-0 top-0 text-white p-3 z-20">
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col min-h-screen ml-[305px]">
        <header className="h-[80px] px-7 flex items-center bg-gradient-to-r from-[#DE9E36] via-[#B3BF00] to-[#4C5200] shadow-md">
          <Navbar />
        </header>

        <main className="flex-1 p-10 bg-gradient-to-r from-[#ced280] to-[#c5ca7a]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminWrapper;