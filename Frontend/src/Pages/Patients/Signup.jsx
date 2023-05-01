import { Input, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { patientSignup } from "../../Redux/PatientAuth/action";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const { username, email, mobile, password } = user;

  let name, value;
  const handleSignupInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (username && email && mobile && password) {
      dispatch(patientSignup(user)).then((res) => navigate("/patient/login"));
    } else {
      alert("Fill All the Details");
    }
  };

  return (
    <>
      <form onSubmit={handleSignupSubmit}>
        <SimpleGrid
          column={1}
          width={"30%"}
          margin={"auto"}
          textAlign={"left"}
          boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          padding={"30px"}
          mt={5}
        >
          <label>Name</label>
          <Input
            type="text"
            placeholder="Name"
            name="username"
            value={username}
            onChange={handleSignupInput}
          />

          <label>Email</label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleSignupInput}
          />

          <label>Mobile</label>
          <Input
            type="tel"
            placeholder="Mobile No."
            name="mobile"
            value={mobile}
            onChange={handleSignupInput}
          />

          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleSignupInput}
          />

          <Input type="submit" value="Signup" />
        </SimpleGrid>
      </form>
    </>
  );
};

export default Signup;
