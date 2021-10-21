import React,{useReducer} from "react";
import QuotesContext from './quoteContext';
import quotesReducer from './quoteReducer';

const QuotesState = props =>{
    const initialState={
        quotes:null,
        quote:null,
        loading:false
    }

    const [state,dispatch] = useReducer(quotesReducer,initialState);

    //Get All Quotes
    const getAllQuotes=()=>{
            
    }

    //Get Specific Quotes

    return <QuotesContext.Provider value={{
        quotes:state.quotes,
        quote:state.quote,
        loading:state.loading
    }}>
        {props.children}
    </QuotesContext.Provider>
    
}

export default QuotesState;