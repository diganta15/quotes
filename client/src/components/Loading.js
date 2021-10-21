import React from 'react'
import spinner from '../assets/spinner.gif';
export const Loading = () => {

    return (
        <div className="has-background-white has-text-centered" >
            <img src={spinner} className="" alt="" />
        </div>
    )
}
