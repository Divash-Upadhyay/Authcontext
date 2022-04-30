import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { isAuth, ToggleAuth } = useContext(AuthContext);

  //   const value = useContext(AuthContext);
  //url = "https://reqres.in/api/login"

  const [user, setUser] = useState([]);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8080/user").then((data) => setUser(data.data));
  }, []);

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.id]: e.target.value });
  };

  const submitData = (el) => {
    let count = 0;
    el.preventDefault();
    user.map((e) => {
      if (loginUser.email === e.email && loginUser.password === e.password) {
        count++;
      }
    });
    // console.log(loginUser)
    if (count > 0) {
      ToggleAuth(true);
      // alert("Login Successful");
      // console.log(isAuth);
    } else {
      ToggleAuth(false);
      // alert("Invalid Credentials");
      // console.log(isAuth);
    }
  };

  return (
    <>
      {/* <h1>{user.map((e) => )}</h1> */}
      <form onSubmit={submitData}>
        <input
          type="email"
          placeholder="enter email"
          id="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          id="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
