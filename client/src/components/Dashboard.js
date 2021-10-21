import React from 'react';
import { Quotes } from './Quotes/Quotes';

export const Dashboard = () => {
    return (
        <div className="container">
            <h1 className="title">
                Dashboard
            </h1>
            <div className="section">
                <Quotes />
            </div>
        </div>
    )
}
