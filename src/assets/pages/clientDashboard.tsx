import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Container } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import ReservationsTable from "../components/dashboard/table";
import ProfileContent from "../components/dashboard/profileContent";
import { LuTimerReset } from "react-icons/lu";
import { GiEgyptianProfile } from "react-icons/gi";

// Replace with your user data fetching logic (e.g., API call)
// function getUserData() {
//   // Simulate fetching user data
//   return {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1234567890",
//   };
// }

// interface User {
//   name: string;
//   email: string;
//   phone: string;
// }

const ClientDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  // const [userData, setUserData] = useState<User | undefined>(undefined);

  useEffect(() => {
    // const fetchedData = getUserData();
    // setUserData(fetchedData);
  }, []); // Empty dependency array to fetch data only once on component mount

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newSelectedTab: number
  ) => {
    console.log(event);
    setSelectedTab(newSelectedTab);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container className="md:flex">
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={selectedTab}
          onChange={handleChange}
          sx={{ borderRight: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            icon={<LuTimerReset fontSize="40" />}
            title="Reservations"
            aria-label="Reservations"
            className="mt-3"
            value={0}
            component={Link}
            to="/dashboard/"
          />
          <Tab
            icon={<GiEgyptianProfile fontSize="40" />}
            title="Reservations"
            className="mt-3"
            component={Link}
            to="/dashboard/profile"
          />
          {/* Add more tabs here */}
        </Tabs>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<ReservationsTable />} />
            <Route path="/profile" element={<ProfileContent />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientDashboard;
