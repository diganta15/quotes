import React from 'react';

export const QuoteItem = ({data}) => {
 
    const {quote, author} = data;
    console.log(quote, author);
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <p className="is-italic has-text-centered-mobile">"{quote}"</p>
                    <p className="has-text-right mt-2">{author}</p>
                </div>
            </div>
        </div>
    )
}
