"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component that will wrap around your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token in localStorage on mount
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); // Optionally decode the token to extract user data
    }
  }, []);

  // Login function to save the token in localStorage and set user state
  const login = (token, userData) => {
    // Save token in localStorage
    localStorage.setItem("token", token);

    // Set user data (optional)
    setUser(userData || { token }); // You can use `userData` from the login API if needed
  };

  // Logout function to clear user data and token
  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => useContext(AuthContext);
