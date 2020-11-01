import React from 'react';
import './App.css';
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/news/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.navBar}/>
                <div className='app-wrapper-content'>
                    {/*<Route path={'/dialogs'} component={Dialogs} props={props}/>
                    <Route path={'/profile'} component={Profile} props={props}/>*/}
                    <Route path={'/dialogs'}
                           render={()=><Dialogs
                               state={props.state.dialogsPage} />} />
                    <Route path={'/profile'}
                           render={()=><Profile
                               state={props.state.profilePage}/>}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
