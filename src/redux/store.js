import { createStore } from "redux";
import reducers from "./reducers";

//1st paramter - IT ACCEPTS COMBINED REDUCER OBJ
//2st paramter - intial state
//3rd param will add redux tab in developer tool window in browser
const store = createStore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;