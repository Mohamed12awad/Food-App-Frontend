import { useState } from "react";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { BiPencil, BiPlus, BiTrash } from "react-icons/bi";
import { useAuth } from "../context/auth";

const GET_USER_BOOKINGS = gql`
  query getAllBookingsForUser {
    getAllBookingsForUser {
      _id
      date
      time
      status
    }
  }
`;

const initialRows = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", status: "active" },
  { id: 2, name: "John Doe", email: "john.doe@example.com", status: "active" },
  { id: 3, name: "John Doe", email: "john.doe@example.com", status: "active" },
  { id: 4, name: "John Doe", email: "john.doe@example.com", status: "active" },
  // Add more customer data here
];

const ClientDashboard = () => {
  const { token } = useAuth();
  const { id } = useParams();
  interface Customer {
    id: number;
    name: string;
    email: string;
    status: string;
  }
  const { loading, error, data } = useQuery(GET_USER_BOOKINGS, {
    context: {
      headers: {
        authorization: `Bearer ${token}`, // Replace YOUR_TOKEN_HERE with your token
      },
    },
  });
  data && console.log(data.getAllBookingsForUser);
  // console.log(error);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "status", headerName: "Status" },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params: GridCellParams) => (
        <div className="flex justify-center gap-2">
          <BiPencil
            className="h-5 w-5 text-blue-500 cursor-pointer"
            onClick={() => handleEdit(params.row as Customer)}
          />
          <BiTrash
            className="h-5 w-5 text-red-500 cursor-pointer"
            onClick={() => handleDelete(params.id as number)}
          />
        </div>
      ),
    },
  ];

  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [customerData, setCustomerData] = useState({
    id: 0,
    name: "",
    email: "",
    status: "",
  });

  const handleAdd = () => {
    setCustomerData({ id: 0, name: "", email: "", status: "" });
    setOpen(true);
  };

  const handleEdit = (customer: Customer) => {
    setCustomerData(customer);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (customerData.id) {
      setRows(
        rows.map((row) => (row.id === customerData.id ? customerData : row))
      );
    } else {
      setRows([...rows, { ...customerData, id: rows.length + 1 }]);
    }
    setOpen(false);
  };

  return (
    <div className="p-4">
      <Button variant="contained" startIcon={<BiPlus />} onClick={handleAdd}>
        Add Customer
      </Button>
      <div className="h-[400px] w-full">
        <DataGrid rows={rows} columns={columns} />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {customerData.id ? "Edit Customer" : "Add Customer"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={customerData.name}
            onChange={(e) =>
              setCustomerData({ ...customerData, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={customerData.email}
            onChange={(e) =>
              setCustomerData({ ...customerData, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            variant="outlined"
            value={customerData.status}
            onChange={(e) =>
              setCustomerData({ ...customerData, status: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ClientDashboard;
