import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoPage from "./components/todo/TodoPage";
import NotesPage from "./components/notes/NotesPage";
import AboutPage from "./components/about/about-page";
import NavBar from "./components/main-layout/nav-bar/NavBar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom/";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Redirect exact from="/" to="/about"/>
                    <Route path="/about" exact component={AboutPage}/>
                    <Route path="/notes" exact component={NotesPage}/>
                    <Route path="/todo" exact component={TodoPage}/>
                    <Route component={() => <h1 className="text-center">Page not found!</h1>}/>
                </Switch>
            </div>
        </Router>
    );
}



export default App;
