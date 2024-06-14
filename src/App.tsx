import "./App.scss";
import ResponsiveAppBar from "./assets/components/navbar";
import UpperNav from "./assets/components/upperNav";
import Footer from "./assets/components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./assets/pages/main";
import About from "./assets/pages/about";
import Menu from "./assets/pages/menu";
import { AuthProvider } from "./assets/context/auth";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import BookTable from "./assets/pages/bookTable";
import MenuItem from "./assets/pages/menuItem";
import BlogsPage from "./assets/pages/blogs";
import SingleBlogPage from "./assets/pages/singleBlogPage";
import ContactUs from "./assets/pages/contactUs";
import Login from "./assets/pages/login";
import SignUp from "./assets/pages/signUp";
import ProtectedRoute from "./assets/utils/protectedRoutes";
import ClientDashboard from "./assets/pages/clientDashboard";

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <UpperNav />
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuItem />} />
            <Route
              path="/book-table"
              element={
                <ProtectedRoute>
                  <BookTable />
                </ProtectedRoute>
              }
            />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <ClientDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
