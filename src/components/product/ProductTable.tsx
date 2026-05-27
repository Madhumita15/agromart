import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Check, X, Pencil, Trash2 } from 'lucide-react';

export interface ProductData {
  id: string;
  image: string;
  title: string;
  farmer: string;
  category: string;
  price: string;
  stock: string;
  status: 'Pending' | 'approved' | 'Rejected'; // Added 'Rejected' status
}

// Defining the props to take in the user's role dynamically
interface ProductTableProps {
  role: 'admin' | 'farmer';
  products: ProductData[]; // Pass the specific array from your API or state
}

const ProductTable = ({ role, products }: ProductTableProps) => {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(76, 82, 0, 0.12)'
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="agromart management table">
        <TableHead>
          <TableRow sx={{ background: 'linear-gradient(90deg, #DE9E36 0%, #B3BF00 50%, #4C5200 100%)' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Product Info</TableCell>
            {/* 1. Hide the Farmer column if a farmer is viewing their own dashboard */}
            {role === 'admin' && (
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Farmer</TableCell>
            )}
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Category</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Price / Unit</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Available Stock</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Status</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: '#fcfdf7' }}>
          {products.map((row) => (
            <TableRow
              key={row.id}
              tabIndex={0}
              sx={{ 
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                outline: 'none',
                '&:hover': { 
                  backgroundColor: '#f3f6d3',
                  transform: 'scale(1.005) translateY(-1px)',
                  boxShadow: '0px 4px 15px rgba(76, 82, 0, 0.1)',
                },
                '&:focus-visible': {
                  backgroundColor: '#edf1c2',
                  boxShadow: 'inset 0 0 0 2px #4C5200',
                },
                '&:last-child td, &:last-child th': { border: 0 } 
              }}
            >
              <TableCell component="th" scope="row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px', background: '#f0f2da', padding: '6px', borderRadius: '8px' }}>{row.image}</span>
                  <span style={{ fontWeight: 600, color: '#333' }}>{row.title}</span>
                </div>
              </TableCell>

              {role === 'admin' && <TableCell sx={{ color: '#555' }}>{row.farmer}</TableCell>}
              
              <TableCell>
                <span style={{ backgroundColor: '#e2e7ad', color: '#4C5200', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                  {row.category}
                </span>
              </TableCell>
              
              <TableCell sx={{ fontWeight: 'bold', color: '#222' }}>{row.price}</TableCell>
              <TableCell sx={{ color: '#666' }}>{row.stock}</TableCell>
              
              <TableCell>
                <span style={{ 
                  backgroundColor: 
                    row.status === 'approved' ? 'rgba(179,191,0,0.2)' : 
                    row.status === 'Pending' ? 'rgba(222,158,54,0.2)' : 'rgba(239, 68, 68, 0.2)', 
                  color: 
                    row.status === 'approved' ? '#4C5200' : 
                    row.status === 'Pending' ? '#b27712' : '#dc2626', 
                  padding: '6px 12px', 
                  borderRadius: '6px', 
                  fontSize: '13px', 
                  fontWeight: 'bold' 
                }}>
                  {row.status}
                </span>
              </TableCell>

              {/* 2. Dynamic Action Buttons based on Role */}
              <TableCell align="center">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {role === 'admin' ? (
                    <>
                      {/* ADMIN BUTTONS */}
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{
                          minWidth: 'auto', padding: '6px 12px', backgroundColor: '#B3BF00', color: '#4C5200', fontWeight: 'bold', borderRadius: '8px', boxShadow: 'none',
                          '&:hover': { backgroundColor: '#4C5200', color: 'white', transform: 'translateY(-1px)' }
                        }}
                      >
                        <Check size={16} style={{ marginRight: '4px' }} /> Approve
                      </Button>
                      <Button 
                        variant="outlined" 
                        size="small"
                        sx={{
                          minWidth: 'auto', padding: '6px 12px', borderColor: '#DE9E36', color: '#b27712', fontWeight: 'bold', borderRadius: '8px',
                          '&:hover': { borderColor: '#915e0a', backgroundColor: 'rgba(222,158,54,0.05)', transform: 'translateY(-1px)' }
                        }}
                      >
                        <X size={16} style={{ marginRight: '4px' }} /> Reject
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* FARMER BUTTONS */}
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{
                          minWidth: 'auto', padding: '6px 12px', backgroundColor: '#DE9E36', color: 'white', fontWeight: 'bold', borderRadius: '8px', boxShadow: 'none',
                          '&:hover': { backgroundColor: '#b27712', transform: 'translateY(-1px)' }
                        }}
                      >
                        <Pencil size={16} style={{ marginRight: '4px' }} /> Edit
                      </Button>
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{
                          minWidth: 'auto', padding: '6px 12px', backgroundColor: '#ef4444', color: 'white', fontWeight: 'bold', borderRadius: '8px', boxShadow: 'none',
                          '&:hover': { backgroundColor: '#b91c1c', transform: 'translateY(-1px)' }
                        }}
                      >
                        <Trash2 size={16} style={{ marginRight: '4px' }} /> Delete
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;