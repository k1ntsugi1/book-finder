import React from "react";
import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="align-self-center">
            <ThreeDots
                height="200"
                width="200"
                color='#e8e8f8'
                ariaLabel='loading'
            />
        </div>
    )
}

export { Spinner }

