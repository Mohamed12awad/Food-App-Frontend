import { useMutation, gql } from "@apollo/client";
import { Box, Button, FormGroup, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

const CREATE_CONTACT = gql`
  mutation sendMessage($name: String!, $email: String!, $message: String!) {
    sendMessage(
      ContactUsInput: { name: $name, email: $email, message: $message }
    ) {
      message
    }
  }
`;

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendMessage] = useMutation(CREATE_CONTACT);

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
    try {
      const { data } = await sendMessage({
        variables: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });
      console.log("Created booking ID:", data);
      // Reset form fields or navigate to another page if needed
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };
  return (
    <div className="py-12 w-3/4 md:w-1/2 bg-white rounded-xl shadow-lg z-50 relative mx-auto">
      <Box
        component="form"
        className="grid gap-5 md:grid-cols-2 grid-cols-1 px-5"
        onSubmit={handleSubmit}
      >
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
            placeholder="Please enter your name"
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
            name="email"
            onChange={handleInputChange}
            required
            placeholder="x-xxx-xxx-xxxx"
            id="outlined-required"
          />
        </FormGroup>

        <FormGroup className="md:col-span-2">
          <FormLabel className="text-black font-medium mb-2">Subject</FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            name="subject"
            onChange={handleInputChange}
            required
            placeholder="x-xxx-xxx-xxxx"
            id="outlined-required"
          />
        </FormGroup>

        <FormGroup className="col-span-2">
          <FormLabel className="text-black font-medium mb-2">Message</FormLabel>

          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 3,
                paddingInline: 3,
              },
            }}
            name="message"
            multiline
            rows={3}
            onChange={handleInputChange}
            placeholder="Please mention any additional requirment."
            id="outlined-required"
          />
        </FormGroup>

        <Button
          type="submit"
          className="bg-[#AD343E] text-white capitalize font-bold col-span-2 rounded-full py-3 mt-3"
        >
          send
        </Button>
      </Box>
    </div>
  );
}

export default ContactUsForm;
