import { MovieReducer } from "./reducers/movie"
import { createStore } from "redux";
const store= createStore(MovieReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store