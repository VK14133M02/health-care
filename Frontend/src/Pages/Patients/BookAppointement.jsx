import { Input, Select, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookAppointment } from "../../Redux/Appointment/action";
import PatientNav from "../../Components/PatientNav";

const BookAppointement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    name: "",
    age: "",
    gender: "",
    depatrtment: "",
    date: "",
  });

  const { name, age, gender, depatrtment, date } = appointment;

  let n, value;
  const handleAppointmentInput = (e) => {
    n = e.target.name;
    value = e.target.value;
    setAppointment({ ...appointment, [n]: value });
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (name && age && gender && depatrtment && date) {
      dispatch(bookAppointment(appointment)).then((res) =>
        navigate("/patient")
      );
      // alert("Your Appointment has been Booked");
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <>
      <PatientNav />
      <form onSubmit={handleAppointmentSubmit}>
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
            name="name"
            value={name}
            onChange={handleAppointmentInput}
          />

          <label>age</label>
          <Input
            type="text"
            placeholder="Age"
            name="age"
            value={age}
            onChange={handleAppointmentInput}
          />

          <label>Gender</label>
          <Select
            placeholder="Select Your Gender"
            name="gender"
            value={gender}
            onChange={handleAppointmentInput}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trandgender">Trandgender</option>
          </Select>

          <label>Department</label>
          <Input
            type="text"
            placeholder="Department"
            name="depatrtment"
            value={depatrtment}
            onChange={handleAppointmentInput}
          />

          <label>Date</label>
          <Input
            type="date"
            name="date"
            value={date}
            onChange={handleAppointmentInput}
          />

          <Input type="submit" value="Book Appointment" />
        </SimpleGrid>
      </form>
    </>
  );
};

export default BookAppointement;
