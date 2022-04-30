import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const ToggleAuth = (ele) => {
    setIsAuth(ele);
  };
  return (
    <AuthContext.Provider value={{ isAuth, ToggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
