import {
  PATIENT_LOGIN_FAILURE,
  PATIENT_LOGIN_REQUEST,
  PATIENT_LOGIN_SUCCESS,
  PATIENT_SIGNUP_FAILURE,
  PATIENT_SIGNUP_REQUEST,
  PATIENT_SIGNUP_SUCCESS,
} from "./actionType";

const initialstate = {
  patient: [],
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    // REGISTER
    case PATIENT_SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case PATIENT_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patient: [...state.patient, payload],
      };
    case PATIENT_SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // LOGIN
    case PATIENT_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case PATIENT_LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: payload, isAuth: true };
    case PATIENT_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true, isAuth: false };

    default:
      return state;
  }
};

export { reducer };
