import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as patientReducer } from "./PatientAuth/reducer";
import { reducer as appointmentReducer } from "./Appointment/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ patientReducer, appointmentReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
