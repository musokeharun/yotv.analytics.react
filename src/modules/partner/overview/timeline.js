import React, {Fragment} from 'react';

const Timeline = ({total, point, used, lastSeen}) => {
    return (
        <Fragment>
            <strong>#3939</strong>
            <span className="float-end text-muted text-sm">30m ago</span>
            <div className="progress position-relative">
                <div
                    className="progress-bar bg-primary-light current-epg-width position-absolute start-0 bottom-0 top-0 h-100"
                    role="progressbar"
                    style={{width: "45%"}}
                    aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"/>
                <div
                    className="progress-bar bg-success position-absolute bottom-0 top-0 h-100"
                    role="progressbar"
                    style={{width: "35%", left: "5%"}}
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </Fragment>
    );
};

export default Timeline;