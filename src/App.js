import react, {Fragment} from "react";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/light.css";
import "./user.css"

import Sidebar from "./layout/sidebar";
import Topbar from "./layout/topbar";

function App() {
    return (
        <Fragment>
            <Sidebar/>
            <div className="main">
                <Topbar/>
            </div>
        </Fragment>
    );
}

export default App;
