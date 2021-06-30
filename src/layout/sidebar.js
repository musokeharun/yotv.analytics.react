import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBalanceScale, faBellSlash, faChartLine,
    faChartPie, faCog, faConciergeBell, faFileContract,
    faFunnelDollar,
    faLocationArrow,
    faPhoneSquareAlt,
    faStream, faTv
} from "@fortawesome/free-solid-svg-icons";
import {faDashcube} from "@fortawesome/free-brands-svg-icons";
import {faTablets} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Sidebar = () => {
    let darkerBackgroundColor = "#391C4F";
    let cogStyles = {
        backgroundColor: `${darkerBackgroundColor} !important`,
        position: "absolute",
        color: "white",
        top: "12px",
        right: "20px"
    };
    return (
        <nav id="sidebar" className="sidebar"
             style={{
                 backgroundColor: darkerBackgroundColor,
                 minHeight: "100vh",
                 maxHeight: "100vh",
                 overflowY: "hidden"
             }}>
            < div className="sidebar-content js-simplebar" style={{backgroundColor: darkerBackgroundColor}}>
                <a className="sidebar-brand">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        enableBackground="new 0 0 20 20"
                        xmlSpace="preserve"
                    >
                        <path
                            d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
            C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
                        />
                        <path
                            d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
            c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
                        />
                        <path
                            d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
            c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
                        />
                    </svg>

                    <span className="align-middle ms-1">Console</span>
                </a>
            </div>

            <ul className="sidebar-nav scrollbar" style={{height: "60h", maxHeight: "60vh"}}>
                <li className="sidebar-item">
                    <span className="sidebar-link">
                        <FontAwesomeIcon icon={faChartPie} className={"align-middle"}/>
                        <span className="align-middle fs-lg">Overview</span>
                        <span style={cogStyles}>
                            <div className="dropend">
                              <span data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faCog} className={"fa-2x mx-auto"}/>
                              </span>
                              <ul className="dropdown-menu">
                                   <li><Link className="dropdown-item" to={"/settings"}>Settings</Link></li>
                                    <li><a className="dropdown-item" href="#">Users and Permissions</a></li>
                                    <li><a className="dropdown-item" href="#">Usage</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Sign Out</a></li>
                              </ul>
                            </div>
                        </span>
                    </span>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon icon={faChartLine} className={"align-middle"}/>
                        <span className="align-middle fs-lg">Realtime</span>
                        <span className="badge badge-sidebar-primary">2</span>
                    </a>
                </li>

                <li className="sidebar-header">Flows</li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faFunnelDollar}/>
                        <span className="align-middle">Funnel Analysis</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faStream}/>
                        <span className="align-middle">Streams</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faPhoneSquareAlt}/>
                        <span className="align-middle">Devices</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faTv}/>
                        <span className="align-middle">Programs</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faLocationArrow}/>
                        <span className="align-middle">Location</span>
                    </a>
                </li>

                <li className="sidebar-header">Reports</li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faFileContract}/>
                        <span className="align-middle">Reports</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faBalanceScale}/>
                        <span className="align-middle">Comparison</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faBellSlash}/>
                        <span className="align-middle">Alerts</span>
                    </a>
                </li>

                <li className="sidebar-header">Marketing</li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faTablets}/>
                        <span className="align-middle">Marketing Overview</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faDashcube}/>
                        <span className="align-middle">Social Platforms</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link">
                        <FontAwesomeIcon className={"align-middle"} icon={faConciergeBell}/>
                        <span className="align-middle">Notifications</span>
                    </a>
                </li>

            </ul>

            <div className="sidebar-cta align-baseline">
                <div className="sidebar-cta-content" style={{backgroundColor: "#42205C"}}>
                    <strong className="d-inline-block mb-2">Monthly Sales Report</strong>
                    <div className="mb-3 text-sm">
                        Your monthly sales report is ready for download!
                    </div>

                    <div className="d-grid">
                        <a
                            href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/"
                            className="btn btn-primary"
                            target="_blank"
                        >Download</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;