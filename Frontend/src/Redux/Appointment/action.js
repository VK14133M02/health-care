import axios from "axios";
import {
  BOOK_APPOINTMENT_FAILURE,
  BOOK_APPOINTMENT_REQUEST,
  BOOK_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_FAILURE,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAILURE,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_FAILURE,
  UPDATE_APPOINTMENT_REQUEST,
  UPDATE_APPOINTMENT_SUCCESS,
} from "./actionType";

const base_url = "https://cooperative-jade-fatigues.cyclic.app/appointment";

const bookAppointment = (payload) => (dispatch) => {
  dispatch({ type: BOOK_APPOINTMENT_REQUEST });
  return axios
    .post(`${base_url}/book`, payload, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) =>
      dispatch({ type: BOOK_APPOINTMENT_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: BOOK_APPOINTMENT_FAILURE }));
};

const getAppointment = () => (dispatch) => {
  dispatch({ type: GET_APPOINTMENT_REQUEST });
  return axios
    .get(`${base_url}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({ type: GET_APPOINTMENT_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_APPOINTMENT_FAILURE }));
};

const updateAppointment = (_id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_APPOINTMENT_REQUEST });
  return axios
    .patch(`${base_url}/${_id}`, payload, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) =>
      dispatch({ type: UPDATE_APPOINTMENT_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: UPDATE_APPOINTMENT_FAILURE }));
};

const deleteAppointment = (_id) => (dispatch) => {
  dispatch({ type: DELETE_APPOINTMENT_REQUEST });
  return axios
    .delete(`${base_url}/${_id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => dispatch({ type: DELETE_APPOINTMENT_SUCCESS, payload: _id }))
    .catch((err) => dispatch({ type: DELETE_APPOINTMENT_FAILURE }));
};

export {
  bookAppointment,
  getAppointment,
  updateAppointment,
  deleteAppointment,
};
