import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";

interface User {
  name: string;
  email: string;
  phone: string;
}

const UserCard: React.FC<User> = ({ name, email, phone }) => {
  return (
    <Card>
      <CardHeader title="User Details" />
      <CardContent>
        <Avatar sx={{ mx: "auto", mb: 2 }}>{name[0]}</Avatar>
        <Typography variant="body2" color="text.secondary">
          Name: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
