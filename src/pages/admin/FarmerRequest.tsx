
import FarmerTable from "../../components/farmer/FarmerTable";
import FarmerTablePagination from "../../components/farmer/FarmerTablePagination";
import SplitText from "../../components/SplitText";



const FarmerRequestTable = () => {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <div className="border-b-2 border-b-gray-900 pb-10">
          <SplitText
            text="Supply Verification Queue" 
            className="text-[#4C5200] text-xl font-bold tracking-wide"
            delay={35}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 15 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
        </div>
        <div>
          <FarmerTable />
          
        </div>
        <FarmerTablePagination />
      </div>
    </>
  );
};

export default FarmerRequestTable;
