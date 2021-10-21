import React,{useContext, useEffect} from 'react';
import { QuoteItem } from './QuoteItem';
import { Loading } from '../Loading';
import QuotesContext from '../../context/quotes/quoteContext';

export const Quotes = () => {
    const quotesContext = useContext(QuotesContext);
    const {quotes, loading, getAllQuotes} = quotesContext;

    useEffect(()=>{
        getAllQuotes();
    },[])
    return (
        <div>
            {loading ? <Loading /> : <> {quotes && quotes.map(item => <QuoteItem data={item} />)}</>}
           
        </div>
    )
}
