import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAuth } from "../../context/auth";
import { gql, useQuery } from "@apollo/client";

interface Booking {
  _id: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests: string;
  status: string;
  user: {
    firstName: string;
    lastName: string;
    phone: string;
  };
}

const GET_USER_BOOKINGS = gql`
  query getAllBookingsForUser {
    getAllBookingsForUser {
      _id
      date
      time
      partySize
      specialRequests
      status
      user {
        firstName
        lastName
        phone
      }
    }
  }
`;

function ReservationsTable() {
  const { token } = useAuth();
  const [rows, setRows] = useState<Booking[]>([]);
  const { loading, error, data } = useQuery(GET_USER_BOOKINGS, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data) {
      const orgData = data.getAllBookingsForUser.map((booking: Booking) => ({
        id: booking._id,
        date: new Date(+booking.date).toLocaleString("en-US"),
        time: booking.time,
        partySize: booking.partySize,
        specialRequests: booking.specialRequests,
        status: booking.status,
        // Access user data
        firstName: booking.user?.firstName,
        lastName: booking.user?.lastName,
        phone: booking.user?.phone,
      }));
      setRows(orgData);
    }
  }, [data]);

  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "phone", headerName: "Phone" },
    { field: "status", headerName: "Status" },
    { field: "date", headerName: "Date" },
    { field: "partySize", headerName: "Party Size" },
    { field: "specialRequests", headerName: "Special Requests" },
  ];

  return (
    <div className="overflow-hidden">
      <div className="max-w-screen-xl mx-auto mt-4">
        <div style={{ width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
    </div>
  );
}

export default ReservationsTable;
