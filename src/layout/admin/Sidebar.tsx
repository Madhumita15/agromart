import {
  GraduationCap,
  // Layers,
  LayoutDashboard,
  LogOut,
  ShoppingBasket,
  User2,
} from "lucide-react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import { useAppDispatch, useAppSeletor } from "../../services/helper/redux";
import { NavLink } from "react-router-dom";
// import { toast } from "sonner";
// import { logoutUser } from "../../store/slices/authSlice";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  // const { user } = useAppSeletor((state) => state.auth);
  // const dispatch = useAppDispatch();

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin/admindashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Product Manage",
      path: "/admin/adminproductManagement",
      icon: <ShoppingBasket />,
    },
    {
      name: "Farmer Request",
      path: "/admin/farmerrequest",
      icon: <GraduationCap />,
    },
    { name: "User Management", path: "/admin/usermanagement", icon: <User2 /> },
  ];

  // const handleLogout = async () => {
  //   try {
  //     await dispatch(logoutUser()).unwrap();
  //     window.location.href = "/";
  //   } catch {
  //     toast.error("Failed to Logout");
  //   }
  // };

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <div className="flex justify-center items-center pt-2 border-b-2 pb-4 border-green-900">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          </NavLink>
        </div>

        <nav aria-label="main mailbox folders">
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "50px",
            }}
          >
            <ListItem
              disablePadding
              sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {adminMenu.length > 0 &&
                adminMenu.map((menu) => (
                  <ListItemButton
                    key={menu.name}
                    component={NavLink}
                    to={menu.path}
                    sx={{
                      width: "280px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: "0px",
                      color: "white",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 1,
                      outline: "none",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, rgba(76,82,0,0.8) 0%, rgba(179,191,0,0.4) 100%)",
                        transform: "translateX(-100%)",
                        transition:
                          "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: -1,
                      },
                      "&:hover, &.active, &:focus-visible": {
                        boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                        transform: "translateY(-2px)",
                        borderRadius: "20px",
                        borderLeft: "4px solid green",
                        borderRight: "4px solid green",
                        "&::before": {
                          transform: "translateX(0)",
                        },
                      },
                      "&:active": {
                        transform: "scale(0.98) translateY(0px)",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                      },
                      "& .MuiListItemIcon-root": {
                        color: "white",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiListItemIcon-root, &.active .MuiListItemIcon-root":
                        {
                          transform: "rotate(5deg) scale(1.1)",
                        },

                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <span
                          style={{ fontWeight: "bold", letterSpacing: "0.5px" }}
                        >
                          {menu.name}
                        </span>
                      }
                    />
                  </ListItemButton>
                ))}
            </ListItem>
          </List>
        </nav>

        <Button
          variant="contained"
          // onClick={handleLogout}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background:
              "linear-gradient(90deg, #315c2b 0%, #B3BF00 50%, #4C5200 100%)",
            backgroundSize: "200% auto",
            border: "1px solid rgba(255,255,255,0.2)",
            gap: 1,
            position: "absolute",
            bottom: "10px",
            width: "290px",
            borderRadius: "50px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

            "&:hover": {
              backgroundPosition: "right center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              transform: "scale(1.02) translateY(-1px)",
              border: "1px solid rgba(255,255,255,0.6)",
            },

            "&:active": {
              transform: "scale(0.98) translateY(0px)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            },
          }}
        >
          <LogOut style={{ width: "18px", height: "18px" }} />
          <span
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            Logout
          </span>
        </Button>
      </Box>
    </>
  );
};

export default Sidebar;
