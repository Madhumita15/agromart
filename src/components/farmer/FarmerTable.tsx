import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { UserCheck, UserX } from "lucide-react";

const FarmerTable = () => {
    interface FarmerRequestData {
  id: string;
  applicantName: string;
  email: string;
  farmName: string;
  location: string;
  appliedDate: string;
  nidNumber: string; // Swapped document name for strict NID numbers
}

const requests: FarmerRequestData[] = [
  {
    id: "REQ-101",
    applicantName: "Ramesh Patel",
    email: "ramesh.p@gmail.com",
    farmName: "Patel Organic Farms",
    location: "Gujarat, IN",
    appliedDate: "25 May 2026",
    nidNumber: "NID-9842-1094",
  },
  {
    id: "REQ-102",
    applicantName: "Gurbaksh Singh",
    email: "singh.farms@gmail.com",
    farmName: "Green Field Agro",
    location: "Punjab, IN",
    appliedDate: "26 May 2026",
    nidNumber: "NID-3341-8821",
  },
  {
    id: "REQ-103",
    applicantName: "Ananya Reddy",
    email: "ananya.r@gmail.com",
    farmName: "Reddy Cultivations",
    location: "Andhra Pradesh, IN",
    appliedDate: "27 May 2026",
    nidNumber: "NID-5501-4492",
  },
];
  return (
    <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              backgroundColor: "transparent",
              overflow: "hidden",
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                borderCollapse: "separate",
                borderSpacing: "0 12px",
              }}
              aria-label="farmer onboarding requests"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#4C5200",
                      fontWeight: "800",
                      fontSize: "14px",
                      border: "none",
                      pb: 1,
                    }}
                  >
                    Applicant Details
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#4C5200",
                      fontWeight: "800",
                      fontSize: "14px",
                      border: "none",
                      pb: 1,
                    }}
                  >
                    Farm Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#4C5200",
                      fontWeight: "800",
                      fontSize: "14px",
                      border: "none",
                      pb: 1,
                    }}
                  >
                    Region / Location
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#4C5200",
                      fontWeight: "800",
                      fontSize: "14px",
                      border: "none",
                      pb: 1,
                    }}
                  >
                    Applied Date
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#4C5200",
                      fontWeight: "800",
                      fontSize: "14px",
                      border: "none",
                      pb: 1,
                    }}
                  >
                    NID Number
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#4C5200",
                      fontWeight: "800",
                      fontSize: "14px",
                      border: "none",
                      pb: 1,
                    }}
                  >
                    Management
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {requests.map((request) => (
                  <TableRow
                    key={request.id}
                    tabIndex={0}
                    sx={{
                      backgroundColor: "#ffffff",
                      transition: "all 0.25s ease-in-out",
                      cursor: "pointer",
                      outline: "none",

                      "& td": {
                        borderTop: "1px solid rgba(76, 82, 0, 0.08)",
                        borderBottom: "1px solid rgba(76, 82, 0, 0.08)",
                        padding: "16px",
                      },
                      "& td:first-of-type": {
                        borderLeft: "1px solid rgba(76, 82, 0, 0.08)",
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                      },
                      "& td:last-of-type": {
                        borderRight: "1px solid rgba(76, 82, 0, 0.08)",
                        borderTopRightRadius: "12px",
                        borderBottomRightRadius: "12px",
                      },

                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0px 8px 20px rgba(76, 82, 0, 0.08)",
                        "& td:first-of-type": {
                          borderLeft: "5px solid #DE9E36",
                        },
                      },

                      "&:focus-visible": {
                        boxShadow: "inset 0 0 0 2px #B3BF00",
                        backgroundColor: "#fcfdf7",
                      },
                    }}
                  >
                    {/* Applicant Profile Block */}
                    <TableCell>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            color: "#222",
                            fontSize: "15px",
                          }}
                        >
                          {request.applicantName}
                        </div>
                        <div
                          style={{
                            color: "#777",
                            fontSize: "12px",
                            marginTop: "2px",
                          }}
                        >
                          {request.email}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell style={{ fontWeight: 600, color: "#4C5200" }}>
                      {request.farmName}
                    </TableCell>

                    <TableCell style={{ color: "#555" }}>
                      {request.location}
                    </TableCell>

                    <TableCell style={{ color: "#666", fontSize: "13px" }}>
                      {request.appliedDate}
                    </TableCell>

                    {/* NID Text Field Block */}
                    <TableCell>
                      <span
                        style={{
                          fontFamily: "monospace",
                          backgroundColor: "#f0f2da",
                          color: "#4C5200",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: "bold",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {request.nidNumber}
                      </span>
                    </TableCell>

                    {/* Control Action Buttons */}
                    <TableCell align="center">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: "#B3BF00",
                            color: "#4C5200",
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: "8px",
                            padding: "6px 14px",
                            boxShadow: "none",
                            "&:hover": {
                              backgroundColor: "#4C5200",
                              color: "#ffffff",
                            },
                          }}
                        >
                          <UserCheck size={16} style={{ marginRight: "6px" }} />{" "}
                          Approve
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: "rgba(239, 68, 68, 0.4)",
                            color: "#dc2626",
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: "8px",
                            padding: "6px 14px",
                            "&:hover": {
                              borderColor: "#dc2626",
                              backgroundColor: "rgba(239, 68, 68, 0.05)",
                            },
                          }}
                        >
                          <UserX size={16} style={{ marginRight: "6px" }} />{" "}
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default FarmerTable