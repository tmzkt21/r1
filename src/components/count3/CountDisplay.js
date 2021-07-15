import React from 'react';
import {useSelector} from "react-redux";

const CountDisplay = () => {

    const value = useSelector(state => state.count)

    console.log(value.count)


    return (
        <div>
            <h1>{value.count}</h1>
        </div>
    );
};

export default CountDisplay;