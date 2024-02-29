import "./App.scss";
import ResponsiveAppBar from "./assets/components/navbar";
import UpperNav from "./assets/components/upperNav";
import Footer from "./assets/components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./assets/pages/main";
import About from "./assets/pages/about";
import Menu from "./assets/pages/menu";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import BookTable from "./assets/pages/bookTable";
import MenuItem from "./assets/pages/menuItem";

// https://food-app-backend-5874.onrender.com/graphql
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <UpperNav />
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItem />} />
          <Route path="/book-table" element={<BookTable />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
