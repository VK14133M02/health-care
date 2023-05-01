import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const MainNav = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.patientReducer.isAuth);
  console.log(isAuth);

  const handleNavigatePatient = () => {
    if (!isAuth) {
      navigate("/patient/signup");
    } else {
      navigate("/patient");
    }
  };

  const handleNavigateDoctor = () => {
    navigate("/doctor");
  };

  return (
    <Flex
      justifyContent={"space-around"}
      boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Text className="nav_link" onClick={handleNavigateDoctor}>
        Doctor
      </Text>
      <Text className="nav_link" onClick={handleNavigatePatient}>
        Patient
      </Text>
    </Flex>
  );
};

export default MainNav;
