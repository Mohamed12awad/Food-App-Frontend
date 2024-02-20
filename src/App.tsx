import "./App.scss";
import ResponsiveAppBar from "./assets/components/navbar";
import UpperNav from "./assets/components/upperNav";
import Footer from "./assets/components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./assets/pages/main";
import About from "./assets/pages/about";

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
      <Router>
        <UpperNav />
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
    // </ThemeProvider>
  );
}

export default App;
