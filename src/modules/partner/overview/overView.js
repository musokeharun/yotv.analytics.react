import React, {Fragment, useEffect} from 'react';
import _ from "lodash";
import DateDiff from "date-diff"
import PageHeader from "../../../layout/header/pageHeader";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../auth/authSlice";
import welcome from "../../../assets/welcom.png";
import {faArrowUp, faChartLine, faEllipsisH, faTv, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fetchDashBoard, fetchRealtime, selectDashboard, selectRealtime} from "./overviewSlice";
import classNames from "classnames";
import {DateTime} from "luxon";
import {v1} from "uuid";
import CountUp from "react-countup";
import RealtimeChart from "./realtimechart";
import Timeline from "./timeline";
import $ from "jquery";

const OverView = () => {
    let user = useSelector(getUser);
    let dispatch = useDispatch();
    let realtime = useSelector(selectRealtime);
    let dashboard = useSelector(selectDashboard);

    console.log("Dash", dashboard);

    useEffect(() => {
        dispatch(fetchRealtime())
        dispatch(fetchDashBoard())
    }, [])

    //EPG
    const {epg, dataSources} = realtime;
    let okay = false;

    const getCurrentEpg = (epg) => {
        let epgCurrentVar;

        if (epg && Array.isArray(epg['current']) && epg["current"].length) {
            okay = true;
            epgCurrentVar = epg['current'];
        } else {
            okay = false;
            return {};
        }

        let currentEpg = {};

        let startDateTime = DateTime.fromISO(epgCurrentVar[0]['start'], {setZone: true, zone: "utc"});
        let now = DateTime.now().setZone("Africa/Kampala");
        let endDateTime = DateTime.fromISO(epgCurrentVar[0]['end'], {zone: "utc", setZone: true});

        console.log("Start", startDateTime.toSQL())
        console.log("Now", now.toSQL())
        console.log("End", endDateTime.toSQL())

        currentEpg['start'] = startDateTime;
        currentEpg['end'] = endDateTime;
        currentEpg['duration'] = epgCurrentVar[0]['duration'];
        currentEpg['title'] = epgCurrentVar[0]['title'];
        currentEpg['used'] = (new DateDiff(now.toJSDate(), startDateTime.minus({hours: 3}))).seconds();
        currentEpg['now'] = now;

        return currentEpg;
    }

    const getRealtimeStats = (dataSources) => {

        if (!dataSources)
            return {};

        const arrays = [];
        let live = 0;

        let totals = dataSources.map(({key, values}) => {
            arrays.push(...values);
            let sum = values.reduce((a, c) => a + c.value, 0)
            if (key.toLowerCase().trim() === "live")
                live = sum;
            return {
                key,
                value: sum
            }
        })

        const result = Object.values(arrays.reduce((acc, {key, value}) => {
            acc[key] = {key, value: (acc[key] ? acc[key].value : 0) + value};
            return acc;
        }, {}));

        return {totals, result, live};
    }

    const getCurrentEpgList = (user) => {

        if (user) {

        }
        return {};

    }

    let {start, end, duration, title, used, now} = getCurrentEpg(epg);
    console.log(start, end, duration, title, used, now);

    let {result, totals, live} = getRealtimeStats(dataSources);
    console.log("Result", result);

    let usedPercentage = Math.abs(used / duration) * 100;
    console.log("Used", usedPercentage);

    const realTimeChartHeight = () => {
        let realtimechart = $("#realtimechart");
        if (!realtimechart.length || realtimechart.length === 0) return 0;
        let height = realtimechart.innerHeight()
        console.log("Height", height);
        return height;
    }

    return (
        <Fragment>

            <PageHeader label={"Overview"}/>

            <div className="row h-100">
                {/*WELCOME BACK*/}
                <div className="col-lg-6 col-xxl-3 d-flex">
                    <div className="card illustration flex-fill">
                        <div className="card-body p-0 d-flex flex-fill">
                            <div className="row g-0 w-100">
                                <div className="col-6">
                                    <div className="illustration-text p-3 m-1">
                                        <h6 className="illustration-text">
                                            Welcome Back, {_.capitalize(user.name.toLowerCase())}!
                                        </h6>
                                        <p className="mb-0">Console
                                            <span className={"badge badge-soft-danger"}>
                                                            YOTV
                                                            </span>
                                        </p>
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
                <div className="col-lg-6 col-xxl-3 d-flex">
                    <div className={classNames("card flex-fill", {"shine": !okay})}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col mt-0">
                                    <h5 className="card-title font-weight-bold">
                                        {title ? title : ""}

                                    </h5>
                                </div>
                                <div className="col-auto" title={"Current Epg"}>
                                    <div className="stat stat-sm">
                                        <FontAwesomeIcon icon={faTv}/>
                                    </div>
                                </div>
                            </div>
                            <span className={"badge badge-soft-primary"}>Start</span>
                            <span className={"font-weight-bold"}>
                                                    {start ? start.toFormat("t") : ""}
                                                        </span>
                            <div className="progress my-lg-4 my-2">
                                {!!used &&
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated text-center"
                                    role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{width: `${usedPercentage}%`}}>
                                    {now ? now.toFormat("t") : ""}
                                </div>
                                }

                            </div>
                            <div className="mb-0 d-flex flex-row align-items-center justify-content-end">
                                <span className={"badge badge-soft-primary"}>End</span>
                                <span className={"font-weight-bold"}>
                                                {end ? end.toFormat("t") : ""}
                                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-3 d-flex">
                    <div className="card flex-fill">
                        <div className="card-body">
                            <div className="row">
                                <div className="col mt-0">
                                    <h5 className="card-title">Real-Time</h5>
                                </div>

                                <div className="col-auto">
                                    <div
                                        className="stat stat-sm d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faChartLine} className={"align-middle"}/>
                                    </div>
                                </div>
                            </div>
                            <span className="h1 d-inline-block mt-1 mb-4">
                                                <CountUp end={live} separator=","/>
                                                </span>
                            <div className="mb-0" title={200}>
                                                <span className="badge badge-soft-success me-2">
                                                <FontAwesomeIcon icon={faArrowUp}/>
                                                +5.25%
                                                </span>
                                <span className="text-muted">LIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-3 d-flex">
                    <div className={classNames("card flex-fill", {"shine": !okay})}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col mt-0">
                                    <h5 className="card-title">Visitors</h5>
                                </div>

                                <div className="col-auto">
                                    <div
                                        className="stat stat-sm d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={faUserAlt} className={"align-middle"}/>
                                    </div>
                                </div>
                            </div>
                            <span className="h1 d-inline-block mt-1 mb-4">
                {(epg && epg.count) ? epg.count.toLocaleString() : 0}
                    </span>
                            <div className="mb-0">
                    <span className="badge badge-soft-danger me-2">
                    <i className="mdi mdi-arrow-bottom-right"/> -1.25%
                    </span>
                                <span className="text-muted">Last week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"row"}>
                <div id={"realtimechart"} className={classNames("col-lg-8 col-xl-7", {"shine": !okay})}>
                    <div className="card flex-fill w-100 bg-primary-dark">
                        <div className="card-header bg-transparent light">
                            <h6 className="text-white">Users online right now</h6>
                            <div className="real-time-user display-3 fw-normal text-white">
                                {!!live && <CountUp end={live} separator=","/>}
                            </div>
                        </div>
                        <div className="card-body text-white fs--1 light pb-0">
                            <p className="border-bottom"
                               style={{borderColor: "rgba(255, 255, 255, 0.15) !important"}}>Users per 5min</p>
                            <div style={{height: "9rem"}} className={"bg-transparent"}>
                                <RealtimeChart
                                    data={result && result.map(r => r.value)}
                                    axisData={result && result.map(r => r.key)}
                                />
                            </div>
                            <div className="list-group-flush mt-2">
                                <div className="rounded-2" style={{border: "1px solid rgba(255, 255, 255, 0.15)"}}>
                                    <div
                                        className="px-3 bg-transparent text-white d-flex justify-content-between px-0 py-1 fw-semi-bold border-top-0 w-auto"
                                        style={{borderBottom: "1px solid rgba(255, 255, 255, 0.15)"}}>
                                        {
                                            !!totals
                                            && totals.map(({key, value}) => (
                                                <p className="mb-0" key={v1()}>
                                                    {_.capitalize(key.toLowerCase())}
                                                    <span className={"badge bg-danger"}>
                                                        <CountUp end={value} separator=","/>
                                                        </span>
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*LIST*/}
                <div className="col-lg-4 col-xl-5 d-flex">
                    <div className="card flex-fill w-100 scrollbar" style={{height: realTimeChartHeight()}}>
                        <div className="card-header">
                            <div className="card-actions float-end">
                                <div className="dropdown show">
                                    <a
                                        data-bs-toggle="dropdown"
                                        data-bs-display="static"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEllipsisH}
                                            className="align-middle"
                                        />
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>
                            </div>
                            <h5 className="card-title mb-0">Watching</h5>
                        </div>
                        <div className="card-body">
                            <ul className="timeline">
                                {
                                    epg && epg.list &&
                                    epg.list.map(user => {
                                        const {} = getCurrentEpgList();
                                        return (
                                            <li className="timeline-item">
                                                <Timeline key={v1()}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row flex-lg-row-reverse">
                <div className="col-12 col-lg-8 d-flex">
                    <div className="card flex-fill w-100">
                        <div className="card-header">
                            <div className="card-actions float-end">
                                <div className="dropdown show">
                                    <a
                                        href="#"
                                        data-bs-toggle="dropdown"
                                        data-bs-display="static"
                                    >
                                        <FontAwesomeIcon icon={faEllipsisH} className={"align-middle"}/>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item text-primary" href="#">Live</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#"
                                        >Something else here</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <h5 className="card-title mb-0">Yesterday</h5>
                        </div>
                        <div className="card-body d-flex w-100">
                            <div className="align-self-center chart chart-lg">
                                <canvas id="chartjs-dashboard-bar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default OverView;