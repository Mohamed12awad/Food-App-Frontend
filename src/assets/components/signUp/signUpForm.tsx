import { useMutation, gql } from "@apollo/client";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  SlideProps,
} from "@mui/material";
import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      phone: $phone
    ) {
      email
    }
  }
`;
const Transition = forwardRef<HTMLDivElement, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide ref={ref} {...props} />;
});

function SignupForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    repassword: "",
  });
  const [signup] = useMutation(CREATE_USER);

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
      const { data } = await signup({
        variables: {
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
        },
      });
      // console.log(await data);
      if (data && data.createUser) {
        // localStorage.setItem("token", data.createUser);
        // console.log(localStorage.token);
        setOpen(true);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle signup errors here
    }
  };

  return (
    <div className="py-8 w-3/4 md:w-1/2 bg-white rounded-xl shadow-lg z-50 relative mx-auto">
      <Box
        component="form"
        className="grid gap-5 grid-cols-1 px-5"
        onSubmit={handleSubmit}
      >
        <FormGroup className="md:col-span-1 col-span-2">
          <FormLabel className="text-black font-medium mb-2 capitalize">
            First Name
          </FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="md:col-span-1 col-span-2">
          <FormLabel className="text-black font-medium mb-2 capitalize">
            Last Name
          </FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="md:col-span-1 col-span-2">
          <FormLabel className="text-black font-medium mb-2 capitalize">
            Email
          </FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="md:col-span-1 col-span-2">
          <FormLabel className="text-black font-medium mb-2 capitalize">
            Phone
          </FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            name="phone"
            placeholder="Phone"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="md:col-span-1 col-span-2">
          <FormLabel className="text-black font-medium mb-2">
            Password
          </FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            type="password"
            name="password"
            onChange={handleInputChange}
            required
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup className="md:col-span-1 col-span-2">
          <FormLabel className="text-black font-medium mb-2">
            Re-Enter Password
          </FormLabel>
          <TextField
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 999,
                paddingInline: 3,
              },
            }}
            type="password"
            name="repassword"
            onChange={handleInputChange}
            required
            placeholder="Re-Enter your Password"
          />
        </FormGroup>

        <Button
          type="submit"
          className="bg-[#AD343E] text-white capitalize font-bold text-base tracking-wider col-span-2 rounded-full py-3 mt-3"
        >
          Sign Up
        </Button>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="px-12"
      >
        <DialogTitle>{"Account registered Successfully"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please Sign in to access your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate("/login")}>Sign In</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignupForm;
