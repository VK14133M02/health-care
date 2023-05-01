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

const initialState = {
  appointments: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Post request

    case BOOK_APPOINTMENT_REQUEST:
      return { ...state, isLoading: true };
    case BOOK_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        appointments: [...state.appointments, payload],
      };
    case BOOK_APPOINTMENT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // Get Request

    case GET_APPOINTMENT_REQUEST:
      return { ...state, isLoading: true };
    case GET_APPOINTMENT_SUCCESS:
      return { ...state, isLoading: false, appointments: payload };
    case GET_APPOINTMENT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // Patch Request

    case UPDATE_APPOINTMENT_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_APPOINTMENT_SUCCESS:
      const updatedAppointment = state.appointments.map((item) =>
        item._id === payload._id ? payload : item
      );
      return { ...state, isLoading: false, appointments: updatedAppointment };
    case UPDATE_APPOINTMENT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // Delete Request

    case DELETE_APPOINTMENT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_APPOINTMENT_SUCCESS:
      const filteredAppointment = state.appointments.filter(
        (item) => item._id !== payload
      );
      return { ...state, isLoading: false, appointments: filteredAppointment };
    case DELETE_APPOINTMENT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
