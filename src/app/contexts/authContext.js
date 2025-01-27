"use client"; 

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component that will wrap around your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token in cookies on mount
    const token = Cookies.get("token");
    if (token) {
      setUser({ token }); // Optionally decode the token to extract user data
    }
  }, []);

  // Login function (you can implement the actual logic based on your app)
  const login = (credentials) => {
    setUser(credentials); // After successful login, set user data
  };

  // Logout function to clear user data and token
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => useContext(AuthContext);
