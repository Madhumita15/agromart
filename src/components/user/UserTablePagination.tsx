import { ChevronLeft, ChevronRight } from "lucide-react"

const UserTablePagination = () => {
  return (
    <>
      <div className="relative">
        {/* REMOVED: bg-white/80 and backdrop-blur-sm fields */}
        <div className="flex flex-row items-center space-x-4 absolute  right-0 py-1.5 px-3 rounded-xl  shadow-sm">
          {/* Previous Button */}
          <button className="p-1 rounded-lg text-[#4C5200] hover:bg-[#B3BF00]/20 hover:text-[#4C5200] active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none">
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>
          
          {/* Data Counter Text */}
          <span className="text-lg font-semibold text-[#4C5200]/80 tracking-wide select-none">
            0 of 10 data
          </span>
          
          {/* Next Button */}
          <button className="p-1 rounded-lg text-[#4C5200] hover:bg-[#B3BF00]/20 hover:text-[#4C5200] active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none">
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </>
  )
}

export default UserTablePagination