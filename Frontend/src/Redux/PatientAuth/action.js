import axios from "axios";
import {
  PATIENT_LOGIN_FAILURE,
  PATIENT_LOGIN_REQUEST,
  PATIENT_LOGIN_SUCCESS,
  PATIENT_SIGNUP_FAILURE,
  PATIENT_SIGNUP_REQUEST,
  PATIENT_SIGNUP_SUCCESS,
} from "./actionType";

const base_url = "https://cooperative-jade-fatigues.cyclic.app/user";

const patientSignup = (payload) => (dispatch) => {
  dispatch({ type: PATIENT_SIGNUP_REQUEST });
  return axios
    .post(`${base_url}/register`, payload)
    .then((res) => {
      alert(res.data.msg);
      dispatch({ type: PATIENT_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PATIENT_SIGNUP_FAILURE }));
};

const patientLogin = (payload) => (dispatch) => {
  dispatch({ type: PATIENT_LOGIN_REQUEST });
  return axios
    .post(`${base_url}/login`, payload)
    .then((res) => {
      alert(res.data.msg);
      dispatch({ type: PATIENT_LOGIN_SUCCESS, payload: res.data.Token });
      localStorage.setItem("token", res.data.Token);
    })
    .catch((err) => dispatch({ type: PATIENT_LOGIN_FAILURE }));
};

export { patientSignup, patientLogin };
