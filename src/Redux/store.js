import { createStore } from "redux";
import profileReducer from "./reducer";

const store = createStore(profileReducer);

export default store;
