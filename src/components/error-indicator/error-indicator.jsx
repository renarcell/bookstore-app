import React from 'react';
import './error-indicator.css';
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';

export default function ErrorIndicator(props) {
    return (
        <div className="error-indicator">
            <DoNotDisturbAltOutlinedIcon/>
            <div>Something went wrong...</div>
			<div className="details">Details: {props.details}</div>
        </div>
    );
}