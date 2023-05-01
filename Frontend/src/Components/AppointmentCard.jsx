import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "../Redux/Appointment/action";
import { useNavigate } from "react-router-dom";

const AppointmentCard = ({ _id, name, age, gender, department, date }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    dispatch(deleteAppointment(_id));
  };

  return (
    <>
      <Card border={"1px solid gray"} w="60%" m={"auto"} mt={5}>
        <CardHeader>
          <Heading>Patient Name : {name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Age : {age}</Text>
          <Text>Gender : {gender}</Text>
          <Text>Department : {department}</Text>
          <Text>Date : {date}</Text>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"space-around"}>
          <Button bg={"blue"} onClick={() => navigate(`/patient/edit/${_id}`)}>
            <EditIcon />
          </Button>
          <Button bg={"red"} onClick={() => handleDelete(_id)}>
            <DeleteIcon />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AppointmentCard;
