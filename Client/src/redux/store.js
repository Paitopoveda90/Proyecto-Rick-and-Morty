import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // con esta linea se conecta la app con la extension REDUX DEVTOOLS del Navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) // con esta linea podemos hacer peticiones a la app servidor
);


export default store;

