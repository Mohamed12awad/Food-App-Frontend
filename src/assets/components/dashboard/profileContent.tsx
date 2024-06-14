import { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Grid, Button, Typography, TextField } from "@mui/material";
import UserCard from "./userCard";
import { useAuth } from "../../context/auth";

const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      firstName
      lastName
      email
      phone
    }
  }
`;

const EDIT_USER = gql`
  mutation EditUser($userId: ID!, $userInput: UserInput!) {
    editUser(userId: $userId, userInput: $userInput) {
      email
    }
  }
`;

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ProfileContent = () => {
  const { token } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  const [editUser] = useMutation(EDIT_USER, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
    onCompleted: () => {
      setEditMode(false);
    },
    onError: (error) => {
      console.error("Error in editUser mutation:", error.message);
    },
  });

  if (loading)
    return (
      <Typography variant="body2" color="text.secondary">
        Loading user data...
      </Typography>
    );

  if (error)
    return (
      <Typography
        variant="body2"
        color="error"
        className="flex justify-center my-3 text-xl font-bold"
      >
        {`Error! ${error.message}`}
      </Typography>
    );

  const userData: User = data.getCurrentUser;

  const handleEdit = () => {
    setEditMode(true);
    setFormState({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
    });
  };

  const handleSave = () => {
    // console.log("Form data before save:", formState);
    editUser({
      variables: {
        userId: userData._id, // Ensure you use _id here
        userInput: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          phone: formState.phone,
        },
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Grid item xs={12} md={4}>
      <UserCard
        name={`${userData.firstName} ${userData.lastName}`}
        email={userData.email}
        phone={userData.phone}
      />
      {editMode ? (
        <>
          <TextField
            label="First Name"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
            Save
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={handleEdit} sx={{ mt: 2 }}>
          Edit Profile
        </Button>
      )}
    </Grid>
  );
};

export default ProfileContent;
