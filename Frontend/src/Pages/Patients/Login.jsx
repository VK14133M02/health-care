import { Input, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { patientLogin } from "../../Redux/PatientAuth/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  let name, value;
  const handleSigninInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(patientLogin(user)).then((res) => navigate("/patient"));
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <>
      <form onSubmit={handleSigninSubmit}>
        <SimpleGrid
          column={1}
          width={"30%"}
          margin={"auto"}
          textAlign={"left"}
          boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          padding={"30px"}
          mt={5}
        >
          <label>Email</label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleSigninInput}
          />

          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleSigninInput}
          />

          <Input type="submit" value="Login" />
        </SimpleGrid>
      </form>
    </>
  );
};

export default Login;
