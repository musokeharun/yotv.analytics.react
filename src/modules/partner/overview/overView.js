import React, {Fragment} from 'react';
import PageHeader from "../../../layout/header/pageHeader";
import {useSelector} from "react-redux";
import {getUser} from "../auth/authSlice";
import welcome from "../../../assets/welcom.png";

const OverView = () => {

    let user = useSelector(getUser);

    return (
        <Fragment>

            <PageHeader
                label={"Overview"}
            />

            <div className="row">
                <div className="col-lg-6 col-xl-5 d-flex">
                    <div className="w-100">
                        <div className="row">

                            {/*WELCOME BACK*/}
                            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
                                <div className="card illustration flex-fill">
                                    <div className="card-body p-0 d-flex flex-fill">
                                        <div className="row g-0 w-100">
                                            <div className="col-6">
                                                <div className="illustration-text p-3 m-1">
                                                    <h6 className="illustration-text">
                                                        Welcome Back, {user.name}!
                                                    </h6>
                                                    <p className="mb-0">Console <span
                                                        className={"badge badge-soft-danger"}>
                                                        YOTV
                                                    </span></p>
                                                </div>
                                            </div>
                                            <div className="col-6 align-self-end text-end">
                                                <img
                                                    src={welcome}
                                                    alt="Welcome"
                                                    className="img-fluid illustration-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
                                <div className="card flex-fill">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Bounce</h5>
                                            </div>

                                            <div className="col-auto">
                                                <div className="stat stat-sm">
                                                    <i
                                                        className="align-middle"
                                                        data-feather="arrow-up-right"
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="h1 d-inline-block mt-1 mb-4">2.364</span>
                                        <div className="mb-0">
                            <span className="badge badge-soft-success me-2">
                              <i className="mdi mdi-arrow-bottom-right"></i> +3.65%
                            </span>
                                            <span className="text-muted">Since last week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default OverView;