import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Launch } from "../containers/Launch";
import "./App.css";

export const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/launch" component={Launch} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

