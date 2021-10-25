import React,{useEffect, useState, useContext} from 'react';
import QuotesContext from '../../context/quotes/quoteContext';
import {Loading} from '../Loading';

export const SingleQuote = (props) => {
    const [loaded, setLoaded] = useState(false);
    const id = props.match.params.id;

    const quotesConetxt = useContext(QuotesContext);
    const {quote, getQuote} = quotesConetxt;
 
    useEffect(async()=>{
       
        await getQuote(id);
        setLoaded(true)
    },[])
    
    return (
        <div>
            {loaded ? (<div className='card'>
                <div className='card-content'>
                    <p className='is-italic has-text-centered-mobile'>"{quote.quote}"</p>
                    <p className='has-text-right mt-2'>{quote.author}</p>
                </div>
            </div>):(<Loading />)}
        </div>
    )
}
