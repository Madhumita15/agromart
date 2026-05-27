
import SplitText from "../../components/SplitText";
import UserTable from "../../components/user/UserTable";
import UserTablePagination from "../../components/user/UserTablePagination";



const UserManagementTable = () => {
  

  

  return (
    <div className="flex flex-col space-y-10">
      <div>
        <SplitText
          text="User Profiles Console"
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
        <UserTable />
      </div>
      <UserTablePagination />
    </div>
  );
};

export default UserManagementTable;
