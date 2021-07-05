import React, {Fragment} from "react";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/light.css";
import "./user.css"

import Sidebar from "./layout/sidebar";
import TopBar from "./layout/topbar";
import Footer from "./layout/footer";
import Settings from "./pages/settings";
import AdminLogin from "./modules/admin/login";
import PartnerLogin from "./modules/partner/login";

function App() {
    const user = undefined;

    return (
        <HashRouter>
            <Switch>
                <Route path={"/admin/login"} rend={props => <AdminLogin {...props}/>}/>
                <Route path={"/partner/login"} rend={props => <PartnerLogin {...props}/>}/>
                <Route path={"/"} render={props => {
                    if (!user) return <Redirect to={"/partner/login"}/>
                    return (
                        <Fragment>
                            <Sidebar/>
                            <div className="main">
                                <TopBar/>
                                <main className="content">
                                    <div className="container-fluid p-0">
                                        <Switch>
                                            <Route path={"/settings"} exact render={props => <Settings {...props} />}/>
                                        </Switch>
                                    </div>
                                </main>
                                <Footer/>
                            </div>
                        </Fragment>
                    );
                }}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
