import React from 'react';
import './App.css';
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/news/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
