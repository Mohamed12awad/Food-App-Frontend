import { useMutation, gql } from "@apollo/client";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const CREATE_CONTACT = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function LoginForm() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(CREATE_CONTACT);

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
      const { data } = await login({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
      if (data && data.login && data.login.token) {
        signIn(data.login.token);
        // localStorage.setItem("token", data.login.token);
        // console.log(localStorage.token);
        navigate("/");
      }
    } catch (error: unknown) {
      const typedError = error as Error;
      if (typedError.message === "Invalid credentials") {
        console.log(typedError.message);
      }
      // console.log(error);
      console.error("Error Logging:", error);
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
        <FormGroup className="col-span-2">
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
        {error && (
          <Typography className="mx-auto font-bold capitalize text-[#AD343E]">
            invalid user name or password
          </Typography>
        )}
        <Button
          type="submit"
          className="bg-[#AD343E] text-white capitalize font-bold text-base tracking-wider col-span-2 rounded-full py-3 mt-3"
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default LoginForm;
