import React from "react";
import "./style.css";

const Heading = () => {
    return (
        <header>
        <h1 className='text-center'>Employee Directory</h1>
        <h6 className='text-center'>Select column title to sort the results.</h6>
        </header>
    );
};

export default Heading;