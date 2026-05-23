import { BookOpen, GraduationCap, Layers, LayoutDashboard, LogOut } from "lucide-react";
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSeletor } from "../../services/helper/redux";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { logoutUser } from "../../store/slices/authSlice";

const Sidebar = () => {
  const {user} = useAppSeletor((state)=> state.auth)
  const dispatch = useAppDispatch()

   const adminMenu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard /> },
    { name: "Product Manage", path: "/admin/adminproduct", icon: <BookOpen /> },
    { name: "Category Manage", path: "/admin/admincategory", icon: <Layers /> },
   
    {
      name: "Farmer Request",
      path: "/admin/farmerrequest",
      icon: <GraduationCap />,
    },
    
  ];


   const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      window.location.href = "/"
    } catch {
      toast.error("Failed to Logout");
    }
  };
  return (
    <>
    <Box sx={{ width: "100%", maxWidth: 360,  }}>
       
        <nav aria-label="main mailbox folders">
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              
            }}
          >
            <ListItem
              disablePadding
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {user?.role === "admin" &&
                adminMenu.length > 0 &&
                adminMenu?.map((menu) => (
                  <ListItemButton
                    key={menu.name}
                    sx={{
                      width: "290px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      {menu.icon}
                    </ListItemIcon>
                    <NavLink to={menu.path}>
                      <ListItemText
                        primary={menu.name}
                        sx={{ fontWeight: "bold" }}
                      />
                    </NavLink>
                  </ListItemButton>
                ))}

              {/* {user?.role === "instructor" &&
                instructorMenu?.length > 0 &&
                instructorMenu?.map((menu) => (
                  <ListItemButton
                    key={menu.name}
                    sx={{
                      width: "290px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      {menu.icon}
                    </ListItemIcon>
                    <NavLink to={menu.path}>
                      <ListItemText
                        primary={menu.name}
                        sx={{ fontWeight: "bold" }}
                      />
                    </NavLink>
                  </ListItemButton>
                ))} */}
            </ListItem>
          </List>
        </nav>
        <div className="absolute bottom-44 items-center justify-center flex flex-col bg-transparent  w-[290px]  ">
          <h1 >Email: {user?.email}</h1>
          <h1>Name: {user?.name}</h1>
        </div>
        <Button
          variant="outlined"
          onClick={handleLogout}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            gap: 1,
            position: "absolute",
            bottom: "120px",
            width: "290px",
            borderRadius: "50px",
          }}
        >
          <LogOut /> <span style={{ fontSize: "15px" }}>Logout</span>
        </Button>
      </Box>
    </>
  )
}

export default Sidebar