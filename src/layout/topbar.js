import React from 'react';
import $ from "jquery";

const Topbar = () => {


    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle" onClick={e => {
                e.preventDefault();
                sideBarToggle();
            }}>
                <i className="hamburger align-self-center"/>
            </a>
        </nav>
    );
};

export const sideBarToggle = () => {
    $(".sidebar").toggleClass("collapsed").on("transitionend", function () {
        console.log("Resize done")
        window.dispatchEvent(new Event("resize"));
    });
}
export default Topbar;