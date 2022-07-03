import React from "react";
import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="align-self-center">
            <ThreeDots
                height="100"
                width="100"
                color='#f264f6'
                ariaLabel='loading'
            />
        </div>
    )
}

export { Spinner }

