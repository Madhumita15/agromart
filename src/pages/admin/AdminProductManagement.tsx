import { Search } from "lucide-react";
import ProductTable, {
  type ProductData,
} from "../../components/product/ProductTable";
import SplitText from "../../components/SplitText";
import ProductTablePagination from "../../components/product/ProductTablePagination";

const AdminProductManagement = () => {
  const rows: ProductData[] = [
    {
      id: "1",
      image: "🌾",
      title: "Organic Basmati Rice",
      farmer: "Rajesh Kumar",
      category: "Grains",
      price: "₹85 / kg",
      stock: "500 kg",
      status: "Pending",
    },
    {
      id: "2",
      image: "🥔",
      title: "Fresh Potatoes",
      farmer: "Amit Singh",
      category: "Vegetables",
      price: "₹30 / kg",
      stock: "1200 kg",
      status: "approved",
    },
    {
      id: "3",
      image: "🍎",
      title: "Shimla Apples",
      farmer: "Suresh Raina",
      category: "Fruits",
      price: "₹150 / kg",
      stock: "350 kg",
      status: "Pending",
    },
    {
      id: "4",
      image: "🫛",
      title: "Green Peas",
      farmer: "Vikram Yadav",
      category: "Vegetables",
      price: "₹60 / kg",
      stock: "200 kg",
      status: "approved",
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row items-center justify-between">
          <div>
            <SplitText
              text="Product Listing Console"
              className="text-[#4C5200] text-xl font-bold tracking-wide"
              delay={35}
              duration={0.6}
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </div>
          <div className="flex flex-row space-x-4 items-center">
            {/* Sort Dropdown */}
            <select
              name="sort"
              id="sort"
              className="py-2 px-4 rounded-xl border border-[rgba(76,82,0,0.2)] bg-white text-[#4C5200] font-semibold text-sm outline-none transition-all duration-200 hover:border-[#B3BF00] focus:border-[#DE9E36] focus:ring-2 focus:ring-[rgba(222,158,54,0.15)] cursor-pointer shadow-sm"
            >
              <option value="">Sort by title</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <div className="relative flex items-center">
              <input
                placeholder="Search product here..."
                name="product"
                id="product"
                className="py-2 pl-4 pr-10 rounded-xl border border-[rgba(30,32,3,0.2)] bg-white text-gray-800 font-medium text-sm outline-none w-[260px] transition-all duration-200 placeholder:text-gray-400 hover:border-[#B3BF00] focus:border-[#DE9E36] focus:ring-2 focus:ring-[rgba(222,158,54,0.15)] shadow-sm"
              />
              <span className="absolute right-3 text-[#4C5200] opacity-60 pointer-events-none">
                <Search size={20}/>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ProductTable role="admin" products={rows} />
        </div>
          <ProductTablePagination />
        
      </div>
    </>
  );
};

export default AdminProductManagement;
