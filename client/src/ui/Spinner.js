import React from 'react';
import './spinner.scss';

const Spinner = () => (
    <div className="flex-center">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Spinner;
