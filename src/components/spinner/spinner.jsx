import React from 'react';
import './spinner.css';
import Loader from "react-spinners/PropagateLoader";

export default function Spinner(props) {
    return (
        <div className="spinner">
            <Loader color={"rgb(104, 139, 170);"} size={"10hv"} />
        </div>
    );
};
