// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Authentication state

  const login = () => setIsAuthenticated(true);  // Set authenticated to true
  const logout = () => setIsAuthenticated(false); // Set authenticated to false

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
