import React, { useEffect } from "react";
import PatientNav from "../../Components/PatientNav";
import { useDispatch, useSelector } from "react-redux";
import { getAppointment } from "../../Redux/Appointment/action";
import AppointmentCard from "../../Components/AppointmentCard";

const PatientHome = () => {
  const dispatch = useDispatch();
  const appointment = useSelector(
    (store) => store.appointmentReducer.appointments
  );

  useEffect(() => {
    if (appointment.length === 0) {
      dispatch(getAppointment());
    }
  }, [appointment.length]);

  console.log(appointment);

  return (
    <div>
      <PatientNav />
      {appointment.length &&
        appointment.map((item) => <AppointmentCard key={item._id} {...item} />)}
    </div>
  );
};

export default PatientHome;
