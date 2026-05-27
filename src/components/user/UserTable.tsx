import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";
import {
  ShieldAlert,
  ShieldCheck,
  TractorIcon,
  User,
  UserMinus,
} from "lucide-react";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: "user" | "farmer"; // Strictly managing marketplace roles now
  joinedDate: string;
  isBlocked: boolean;
}

const initialUsers: UserData[] = [
  {
    id: "USR-701",
    name: "Kabir Ahmed",
    email: "kabir.ahmed@gmail.com",
    role: "user",
    joinedDate: "12 Jan 2026",
    isBlocked: false,
  },
  {
    id: "USR-702",
    name: "Matiur Rahman",
    email: "matiur.farm@gmail.com",
    role: "farmer",
    joinedDate: "04 Mar 2026",
    isBlocked: false,
  },
  {
    id: "USR-703",
    name: "Sajid Islam",
    email: "sajid.islam@gmail.com",
    role: "user",
    joinedDate: "19 Apr 2026",
    isBlocked: true,
  },
];

const UserTable = () => {
    const [users, setUsers] = useState<UserData[]>(initialUsers);
    // Handle changing user roles between regular user and farmer
      const handleRoleChange = (id: string, newRole: "user" | "farmer") => {
        setUsers(
          users.map((user) => (user.id === id ? { ...user, role: newRole } : user)),
        );
      };
    
      // Handle toggling the block status
      const handleToggleBlock = (id: string) => {
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, isBlocked: !user.isBlocked } : user,
          ),
        );
      };
  return (
    <>
    <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0px 15px 40px rgba(76, 82, 0, 0.05)",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            border: "1px solid rgba(179, 191, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="user accounts management">
            {/* Table Head */}
            <TableHead sx={{ backgroundColor: "#fdfef9" }}>
              <TableRow>
                <TableCell
                  sx={{
                    color: "#4C5200",
                    fontWeight: "800",
                    fontSize: "14px",
                    borderBottom: "3px solid #B3BF00",
                  }}
                >
                  User Details
                </TableCell>
                <TableCell
                  sx={{
                    color: "#4C5200",
                    fontWeight: "800",
                    fontSize: "14px",
                    borderBottom: "3px solid #B3BF00",
                  }}
                >
                  Account ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "#4C5200",
                    fontWeight: "800",
                    fontSize: "14px",
                    borderBottom: "3px solid #B3BF00",
                  }}
                >
                  Joined Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "#4C5200",
                    fontWeight: "800",
                    fontSize: "14px",
                    borderBottom: "3px solid #B3BF00",
                  }}
                >
                  Marketplace Role
                </TableCell>
                <TableCell
                  sx={{
                    color: "#4C5200",
                    fontWeight: "800",
                    fontSize: "14px",
                    borderBottom: "3px solid #B3BF00",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#4C5200",
                    fontWeight: "800",
                    fontSize: "14px",
                    borderBottom: "3px solid #B3BF00",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{
                    transition: "background-color 0.2s ease",
                    "&:hover": { backgroundColor: "rgba(222, 158, 54, 0.03)" },
                    "& td": { borderBottom: "1px solid rgba(76, 82, 0, 0.06)" },
                  }}
                >
                  {/* Profile Block with Dynamic Colored Avatar based on User vs Farmer */}
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          backgroundColor:
                            user.role === "farmer" ? "#4C5200" : "#DE9E36",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: "#222" }}>
                          {user.name}
                        </div>
                        <div style={{ color: "#666", fontSize: "12px" }}>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell
                    style={{
                      fontFamily: "monospace",
                      color: "#555",
                      fontWeight: 600,
                    }}
                  >
                    {user.id}
                  </TableCell>

                  <TableCell style={{ color: "#666", fontSize: "13px" }}>
                    {user.joinedDate}
                  </TableCell>

                  {/* Corrected Marketplace Role Dropdown Select */}
                  <TableCell>
                    <FormControl size="small" sx={{ minWidth: 145 }}>
                      {" "}
                      {/* Increased slightly to comfortably fit text + icon side-by-side */}
                      <Select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(
                            user.id,
                            e.target.value as "user" | "farmer",
                          )
                        }
                        // 1. The Magic Fix: Tells the select box exactly how to display the selected value using flex properties
                        renderValue={(selected) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            {selected === "farmer" ? (
                              <>
                                <span>Farmer</span>
                                <TractorIcon size={16} />
                              </>
                            ) : (
                              <>
                                <span>Regular User</span>
                                <User size={16} />
                              </>
                            )}
                          </div>
                        )}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: user.role === "farmer" ? "#4C5200" : "#DE9E36",
                          borderRadius: "8px",

                          // Ensures the internal text wrapper itself behaves as a clean flex grid
                          "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center",
                          },

                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(76, 82, 0, 0.2)",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#B3BF00",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4C5200",
                          },
                        }}
                      >
                        {/* Dropdown Options List */}
                        <MenuItem
                          value="user"
                          sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            color: "#DE9E36",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          Regular User <User size={16} />
                        </MenuItem>

                        <MenuItem
                          value="farmer"
                          sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            color: "#4C5200",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          Farmer <TractorIcon size={16} />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>

                  {/* Status Badges */}
                  <TableCell>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        backgroundColor: user.isBlocked
                          ? "rgba(239, 68, 68, 0.1)"
                          : "rgba(179, 191, 0, 0.15)",
                        color: user.isBlocked ? "#dc2626" : "#4C5200",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {user.isBlocked ? (
                        <ShieldAlert size={12} />
                      ) : (
                        <ShieldCheck size={12} />
                      )}
                      {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </TableCell>

                  {/* Actions */}
                  <TableCell align="center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#777",
                            marginRight: "4px",
                          }}
                        >
                          Restrict:
                        </span>
                        <Switch
                          checked={user.isBlocked}
                          onChange={() => handleToggleBlock(user.id)}
                          size="small"
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "#dc2626",
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                              { backgroundColor: "#dc2626" },
                            "& .MuiSwitch-track": {
                              backgroundColor: "#B3BF00",
                            },
                          }}
                        />
                      </div>

                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleToggleBlock(user.id)}
                        sx={{
                          color: user.isBlocked ? "#4C5200" : "#dc2626",
                          fontWeight: "bold",
                          fontSize: "12px",
                          textTransform: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        <UserMinus size={14} />
                        {user.isBlocked ? "Unblock User" : "Block"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

export default UserTable