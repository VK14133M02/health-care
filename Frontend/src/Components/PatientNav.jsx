import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PatientNav = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Link className="nav_link" to={"/patient"}>
        Home
      </Link>
      <Link className="nav_link" to={"/patient/book"}>
        Book Appointment
      </Link>
      <Link className="nav_link" to={"/patient/signup"}>
        Signup
      </Link>
      <Link className="nav_link" to={"/patient/login"}>
        Login
      </Link>
    </Flex>
  );
};

export default PatientNav;
