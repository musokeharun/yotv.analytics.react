import React from 'react';

const TimePicker = () => {

    const handleClick = (from, to, fromMillis, toMillis) => {

    }

    return (
        <div className={"row"}>

            <div className={"col-md-8"}></div>
            <div className={"col-4 d-none d-md-block"}>
                <h6 className={"text-muted"}>Relative time ranges</h6>
                <div className="list-group">
                    {
                        times &&    
                        times.length &&
                        times.map(({title, years, months, days, minutes, hours, from, to, accurate}, index) =>
                            <RelativeTimeRanges
                                key={index}
                                title={title} years={years} months={months} days={days}
                                minutes={minutes} hours={hours} from={from} to={to}
                                accurate={accurate}
                                onClick={handleClick}/>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

const RelativeTimeRanges = ({title, years, months, days, minutes, hours, from, to, accurate, onClick}) => {

    const handleClick = (from, to, fromMillis, toMillis) => {


        onClick(from, to, fromMillis, toMillis)
    }

    return <a
        className="list-group-item list-group-item-action"
        onClick={e => {
            e.preventDefault()
            handleClick(e)
        }}>
        {title}
    </a>
}

export default TimePicker;

const times = [
    {
        title: "Last 5minutes",
        minutes: 5,
        from: "minute",
        accurate: "minute"
    }
];