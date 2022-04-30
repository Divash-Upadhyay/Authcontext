import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const LoginStatus = () => {
  const { isAuth } = useContext(AuthContext);

  return <div>{isAuth ? "Login Successful" : "Invalid Credentails"}</div>;
};
