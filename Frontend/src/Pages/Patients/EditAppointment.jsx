import { Input, Select, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PatientNav from "../../Components/PatientNav";
import {
  getAppointment,
  updateAppointment,
} from "../../Redux/Appointment/action";

const EditAppointment = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appointment = useSelector(
    (store) => store.appointmentReducer.appointments
  );

  const [currentAppointment, setCurrentAppointment] = useState({
    name: "",
    age: "",
    gender: "",
    depatrtment: "",
    date: "",
  });

  const { name, age, gender, depatrtment, date } = currentAppointment;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateAppointment(_id, currentAppointment)).then((res) =>
      navigate("/patient")
    );
    alert("Appointment Data has been Modified");
  };

  let n, value;
  const handleUpdateInput = (e) => {
    n = e.target.name;
    value = e.target.value;
    setCurrentAppointment({ ...currentAppointment, [n]: value });
  };

  useEffect(() => {
    if (appointment.length === 0) {
      dispatch(getAppointment());
    }
  }, [appointment.length]);

  useEffect(() => {
    if (_id) {
      let booking = appointment.find((item) => item._id === _id);
      booking && setCurrentAppointment(booking);
    }
  }, [_id, appointment]);

  return (
    <>
      <PatientNav />
      <form onSubmit={handleUpdate}>
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
            onChange={handleUpdateInput}
          />

          <label>age</label>
          <Input
            type="text"
            placeholder="Age"
            name="age"
            value={age}
            onChange={handleUpdateInput}
          />

          <label>Gender</label>
          <Select
            onChange={(e) => {
              const currentGender = e.target.value;
              setCurrentAppointment({
                ...currentAppointment,
                gender: currentGender,
              });
            }}
            value={gender}
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
            onChange={handleUpdateInput}
          />

          <label>Date</label>
          <Input
            type="date"
            name="date"
            value={date}
            onChange={handleUpdateInput}
          />

          <Input type="submit" value="Update Appointment" />
        </SimpleGrid>
      </form>
    </>
  );
};

export default EditAppointment;
