import {
  Box,
  Button,
  Container,
  FormGroup,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOOKING = gql`
  mutation CreateBooking(
    $tableId: ID!
    $date: String!
    $time: String!
    $partySize: Int!
    $specialRequests: String
    $status: String!
  ) {
    createBooking(
      bookingInput: {
        tableId: $tableId
        date: $date
        time: $time
        partySize: $partySize
        specialRequests: $specialRequests
        status: $status
      }
    ) {
      _id
    }
  }
`;
function BookForm() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiYWQ1YmFiMDBmNDliNzFhYTdmNTgiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNzA5MTc0MDgxLCJleHAiOjE3MDkxNzc2ODF9.iX3bCsmaX1dADo0Vmoi9ADu258VkbAzksE33Aex4qlw";

  const [formData, setFormData] = useState({
    tableId: "65dfcbb672c60e7b1371164b",
    time: "",
    date: "",
    partySize: "",
    specialRequests: "",
    status: "pending",
    name: "",
    phone: "",
  });

  const [createBooking] = useMutation(CREATE_BOOKING);

  const handleDateChange = (e: Date | null) => {
    if (e) {
      const dateString = e.toISOString().split("T")[0];
      setFormData({
        ...formData,
        date: dateString,
      });
    }
  };
  const handleTimeChange = (time: Date | null) => {
    if (time) {
      time = new Date(time);
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setFormData({
        ...formData,
        time: timeString,
      });
    }
  };
  const handleSelectChange = (
    event: SelectChangeEvent<string | number | null>
  ) => {
    const value = event.target.value;
    if (value !== null) {
      setFormData({
        ...formData,
        partySize: value as string,
      });
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await createBooking({
        variables: {
          tableId: formData.tableId,
          date: formData.date,
          time: formData.time,
          partySize: parseInt(formData.partySize),
          specialRequests: formData.specialRequests,
          status: formData.status,
        },
        context: {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        },
      });
      console.log("Created booking ID:", data.createBooking._id);
      // Reset form fields or navigate to another page if needed
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container className="py-12 w-3/4 md:w-1/2 bg-white rounded-xl shadow-lg z-50 relative">
        <Box
          component="form"
          className="grid gap-5 md:grid-cols-2 grid-cols-1"
          onSubmit={handleSubmit}
        >
          <FormGroup className="md:col-span-1 col-span-2">
            <FormLabel className="text-black font-medium mb-2">Date</FormLabel>
            <DatePicker
              format="DD/MM/YYYY"
              disablePast
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: 999,
                  paddingInline: 3,
                },
              }}
              slotProps={{
                textField: {
                  required: true,
                },
              }}
              name="date"
              onChange={handleDateChange}
            />
          </FormGroup>
          <FormGroup className="md:col-span-1 col-span-2">
            <FormLabel className="text-black font-medium mb-2">Time</FormLabel>
            <TimePicker
              disablePast
              name="time"
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: 999,
                  paddingInline: 3,
                },
              }}
              slotProps={{
                textField: {
                  required: true,
                  placeholder: "Please Enter Date",
                },
              }}
              onChange={handleTimeChange}
            />
          </FormGroup>
          <FormGroup className="md:col-span-1 col-span-2">
            <FormLabel className="text-black font-medium mb-2 capitalize">
              name
            </FormLabel>
            <TextField
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: 999,
                  paddingInline: 3,
                },
              }}
              name="name"
              onChange={handleInputChange}
              required
              id="outlined-required"
            />
          </FormGroup>
          <FormGroup className="md:col-span-1 col-span-2">
            <FormLabel className="text-black font-medium mb-2">Phone</FormLabel>
            <TextField
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: 999,
                  paddingInline: 3,
                },
              }}
              name="phone"
              onChange={handleInputChange}
              required
              placeholder="x-xxx-xxx-xxxx"
              id="outlined-required"
            />
          </FormGroup>
          <FormGroup className="col-span-2">
            <FormLabel className="text-black font-medium mb-2">
              Total Person
            </FormLabel>
            <Select
              defaultValue=""
              label="total Persons"
              name="partySize"
              className="rounded-full"
              onChange={handleSelectChange}
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i} value={i + 1}>
                  {i + 1} Person
                </MenuItem>
              ))}
            </Select>
          </FormGroup>
          <FormGroup className="col-span-2">
            <TextField
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: 3,
                  paddingInline: 3,
                },
              }}
              name="specialRequests"
              multiline
              rows={3}
              onChange={handleInputChange}
              placeholder="Please mention any additional requirment."
              id="outlined-required"
            />
          </FormGroup>

          <Button
            type="submit"
            className="bg-[#AD343E] text-white font-bold col-span-2 rounded-full py-3 mt-3"
          >
            Book A Table
          </Button>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default BookForm;
