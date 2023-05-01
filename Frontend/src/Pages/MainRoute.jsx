import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DoctorHome from "./Doctors/DoctorHome";
import PatientHome from "./Patients/PatientHome";
import Signup from "./Patients/Signup";
import Login from "./Patients/Login";
import BookAppointement from "./Patients/BookAppointement";
import EditAppointment from "./Patients/EditAppointment";
import DoctorSignup from "./Doctors/DoctorSignup";
import DoctorLogin from "./Doctors/DoctorLogin";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<DoctorHome />} />
        <Route path="/patient" element={<PatientHome />} />
        <Route path="/patient/signup" element={<Signup />} />
        <Route path="/patient/login" element={<Login />} />
        <Route path="/patient/book" element={<BookAppointement />} />
        <Route path="/patient/edit/:_id" element={<EditAppointment />} />
        <Route path="/doctor/signup" element={<DoctorSignup />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="*" element={"Error 404, Page Not Found"} />
      </Routes>
    </div>
  );
};

export default MainRoute;
