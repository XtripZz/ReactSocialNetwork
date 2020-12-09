import React from "react";
import "./App.css";
import MainContentainer from './components/MainContainer/MainContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <MainContentainer/>
        </div>
    );
};

const SamuraiJSApp = props => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;