import "./App.scss";
import ResponsiveAppBar from "./assets/components/navbar";
import UpperNav from "./assets/components/upperNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./assets/pages/main";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// const darkTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
    // <CssBaseline />
    <>
      <UpperNav />
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
    // </ThemeProvider>
  );
}

export default App;
