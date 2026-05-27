import { Plus } from "lucide-react";
import ProductTable, { type ProductData } from "../../components/product/ProductTable";

const AgentProductManagement = () => {
   const rows:ProductData[] = [
    { id: '1', image: '🌾', title: 'Organic Basmati Rice', farmer: 'Rajesh Kumar', category: 'Grains', price: '₹85 / kg', stock: '500 kg', status: 'Pending' },
    { id: '2', image: '🥔', title: 'Fresh Potatoes', farmer: 'Amit Singh', category: 'Vegetables', price: '₹30 / kg', stock: '1200 kg', status: 'approved' },
    { id: '3', image: '🍎', title: 'Shimla Apples', farmer: 'Suresh Raina', category: 'Fruits', price: '₹150 / kg', stock: '350 kg', status: 'Pending' },
    { id: '4', image: '🫛', title: 'Green Peas', farmer: 'Vikram Yadav', category: 'Vegetables', price: '₹60 / kg', stock: '200 kg', status: 'approved' },
  ];
   
  return (
    <div className="flex flex-col">
      <div className="flex justify-between ">
        <div>
          <h1>agent Product Management</h1>
        </div>
        <div>
          <button className="flex flex-row gap-2 text-lg text-white bg-[#315c2b] p-2 rounded-lg border-2 hover:border-green-900 hover:bg-white hover:text-green-900">
            <Plus /> Add Product
          </button>
        </div>
      </div>


      <div>
        <ProductTable role="farmer" products={rows} />

      </div>
    </div>
  );
};

export default AgentProductManagement;
