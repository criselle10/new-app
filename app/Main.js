import React, {useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Axios from 'axios';
Axios.defaults.baseURl = 'http://localhost:8080'

// My Components
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';
import CreatePost from "./components/CreatePost";
import ViewSignglePost from './components/ViewSinglePost';
import FlashMessages from './components/FlashMessages';

const Main = () => {
    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
    const [flashMessages, setFlashMessages] = useState([]);

    function addFlashMessage(msg) {
        setFlashMessages(prev => prev.concat(msg))
    }

    return (
        <BrowserRouter>
            <FlashMessages messages={flashMessages} />
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <Switch>
                <Route path="/" exact>
                    { loggedIn ? <Home /> : <HomeGuest /> } 
                </Route>
                <Route path="/post/:id">
                    <ViewSignglePost />
                </Route>
                <Route path="/create-post">
                    <CreatePost addFlashMessage={addFlashMessage}/>
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

ReactDOM.render(<Main />, document.querySelector("#app"));


if(module.hot) {
    module.hot.accept();
}