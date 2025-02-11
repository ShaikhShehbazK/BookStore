import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const localStorageData = localStorage.getItem("Users");

  const [authData, setAuthData] = useState(
    localStorageData ? JSON.parse(localStorageData) : undefined
  );

  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
