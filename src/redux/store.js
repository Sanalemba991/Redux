import { createStore } from "redux";
import reducers from "./reducers/index.js";

// Correcting the DevTools extension reference
const store = createStore(
  reducers,
  {}, // You can pass the initial state here if needed, or leave it as an empty object
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
