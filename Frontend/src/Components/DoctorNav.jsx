import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DoctorNav = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Link className="nav_link" to="/doctor">
        Home
      </Link>
      <Link className="nav_link" to={"/doctor/signup"}>
        Signup
      </Link>
      <Link className="nav_link" to={"/doctor/login"}>
        Login
      </Link>
    </Flex>
  );
};

export default DoctorNav;
