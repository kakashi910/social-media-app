import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: { username: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage or cookies for existing session data
    const savedSession = localStorage.getItem('userSession');
    if (savedSession) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (user: { username: string; password: string }) => {
    // Implement authentication logic (e.g., API call)
    // Save session data to local storage
    localStorage.setItem('userSession', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove session data from local storage
    localStorage.removeItem('userSession');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
