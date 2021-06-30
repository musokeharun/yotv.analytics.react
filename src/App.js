import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/light.css";
import "./user.css"

import Sidebar from "./layout/sidebar";
import Topbar from "./layout/topbar";
import Footer from "./layout/footer";
import Settings from "./pages/settings";

function App() {
    return (
        <HashRouter>
            <Sidebar/>
            <div className="main">
                <Topbar/>
                <main className="content">
                    <div className="container-fluid p-0">
                        <Switch>
                            <Route path={"/settings"} exact render={props => <Settings {...props} />}/>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
