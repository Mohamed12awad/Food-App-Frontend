import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReservationsTable from "../components/dashboard/table";
import { useState } from "react";

const ClientDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Drawer
          variant="permanent"
          open={sidebarOpen}
          PaperProps={{
            sx: {
              width: 240,
              flexShrink: 0,
            },
          }}
        >
          <List>
            <ListItem button onClick={handleSidebarToggle}>
              <ListItemIcon>
                <i className="fas fa-tachometer-alt" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            {/* Add more links here */}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            pt: 0,
          }}
        >
          <nav>
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              {/* Add more links here */}
            </ul>
          </nav>

          <Routes>
            <Route path="/profile" element={<ReservationsTable />} />
            {/* Add more routes here */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default ClientDashboard;
