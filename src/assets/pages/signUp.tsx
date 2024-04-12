import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import SignupForm from "../components/signUp/signUpForm";
import { Link } from "react-router-dom";

function SignUp() {
  useEffect(() => {
    document.title = "SignUp";
  });
  return (
    <Box className="bg-[#F9F9F7]">
      <Container className="pb-16">
        <Box className="text-center py-12">
          <Typography variant="h3" className="main-font">
            Create Account
          </Typography>
        </Box>
        <SignupForm />
        <Box className="text-center pt-12">
          <Typography variant="h6" className="main-font">
            Already have an account{" "}
            <Link to="/login" className=" text-[#AD343E]">
              Sign In
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default SignUp;
