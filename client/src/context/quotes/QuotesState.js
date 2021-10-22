import React, { useReducer } from "react";
import QuotesContext from "./quoteContext";
import quotesReducer from "./quoteReducer";
import { GET_ALL_QUOTES, GET_QUOTE,GET_USER_QUOTES,GET_USER_QUOTE, ERROR } from "../types";

const URL = 'http://localhost:8000'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRpZ2FudGFAZW1haWwuY29tIiwiaWF0IjoxNjM0NzM5MjA5LCJleHAiOjE2MzUwOTkyMDl9.XbE6pl81WFRnK8yGIF1RsMX6OF0SgePOmrmP2x2NMc4'

const QuotesState = (props) => {
	const initialState = {
		quotes:null,
		quote: null,
		loading: true,
		errors:null,
	};

	const [state, dispatch] = useReducer(quotesReducer, initialState);

	//Get All Quotes
	const getAllQuotes = async() => {
		
	try{
		const res = await fetch(`${URL}/quotes`);
		const data = await res.json();
		dispatch({type:GET_ALL_QUOTES, payload:data});
		
	}catch(err){
		dispatch({type:ERROR, payload:err});
	}

    };

    //Get A Single Quote
    const getQuote = async(id)=>{
		try{
			const res = await fetch(`${URL}/quotes/${id}`);
			const data = await res.json();
			dispatch({type:GET_QUOTE, payload:data});
		}
		catch(err){
			dispatch({ type: ERROR, payload: err });
		}
    }

	//Get A User's All Quotes
    const getUserQuotes = async(userId)=>{

        
    }

    //Get A User's Quote
    const getUserQuote = async(id)=>{

    }

	return (
		<QuotesContext.Provider
			value={{
				quotes: state.quotes,
				quote: state.quote,
				loading: state.loading,
                getAllQuotes,
                getQuote,
                getUserQuotes,
                getUserQuote
			}}>
			{props.children}
		</QuotesContext.Provider>
	);
};

export default QuotesState;
