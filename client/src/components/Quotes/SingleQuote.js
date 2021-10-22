import React,{useEffect, useContext} from 'react';
import QuotesContext from '../../context/quotes/quoteContext';

export const SingleQuote = (props) => {
    const id = props.match.params.id;

    const quotesConetxt = useContext(QuotesContext);
    const {quote, getQuote} = quotesConetxt;
 
    useEffect(async()=>{
        getQuote(id);
    },[])
    
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <p className='is-italic has-text-centered-mobile'>"{quote.quote}"</p>
                    <p className='has-text-right mt-2'>{quote.author}</p>
                </div>
            </div>
        </div>
    )
}
