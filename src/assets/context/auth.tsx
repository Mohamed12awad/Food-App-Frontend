// AuthContext.js
import { createContext, useContext, useState, ReactNode } from "react";
// import axios from "axios";

const AuthContext = createContext<{
  token: string;
  signIn: (newToken: string) => void;
  signOut: () => void;
  isAuthenticated: () => boolean;
}>({
  token: "",
  signIn: () => {},
  signOut: () => {},
  isAuthenticated: () => false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const signIn = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setToken("");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const isAuthenticated = () => {
    return !!token;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
