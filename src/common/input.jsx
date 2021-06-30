import React from "react";
import classNames from "classnames";

const Input = ({name, label, errors, wrapperClass, inputClass, ...rest}) => {
    return (
        <div className={classNames({wrapperClass: !!wrapperClass, "form-group": !wrapperClass})}>
            {label && <label htmlFor={name}>{label}</label>}
            <input {...rest} name={name} className="form-control" id={name}/>
            {errors && <div className="alert alert-danger">{errors}</div>}
        </div>
    );
};

export default Input;
