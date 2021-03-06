import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../hooks/useClock';


function Clock(props) {

    const {timeString} = useClock();
    return (
        <div>
            <h1>{timeString}</h1>
        </div>
    );
}

export default Clock;