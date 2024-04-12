import { Box, Container, Typography } from "@mui/material";
import LoginForm from "../components/login/loginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box className="bg-[#F9F9F7]">
      <Container className="pb-16">
        <Box className="text-center py-12">
          <Typography variant="h3" className="main-font">
            Welcome Back
          </Typography>
        </Box>
        <LoginForm />
        <Box className="text-center pt-12">
          <Typography variant="h6" className="main-font">
            Don't have an account{" "}
            <Link to="/signup" className=" text-[#AD343E]">
              SignUp
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
