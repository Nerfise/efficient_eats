// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const cookieValue = Cookies.get('authenticated');
    if (cookieValue === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const login = () => {
    Cookies.set('authenticated', 'true', { expires: 7 });
    setAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('authenticated');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
