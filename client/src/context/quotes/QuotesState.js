import React, { useReducer } from "react";
import QuotesContext from "./quoteContext";
import quotesReducer from "./quoteReducer";
import {
	GET_ALL_QUOTES,
	GET_QUOTE,
	GET_USER_QUOTES,
	GET_USER_QUOTE,
	ERROR,
} from "../types";

const URL = "http://localhost:8000";

const QuotesState = (props) => {
	const initialState = {
		quotes: null,
		quote: null,
		loading: true,
		errors: null,
	};

	const [state, dispatch] = useReducer(quotesReducer, initialState);

	//Get All Quotes
	const getAllQuotes = async () => {
		try {
			const res = await fetch(`${URL}/quotes`);
			const data = await res.json();
			dispatch({ type: GET_ALL_QUOTES, payload: data });
		} catch (err) {
			dispatch({ type: ERROR, payload: 'Cannot Get Quotes' });
		}
	};

	//Get A Single Quote
	const getQuote = async (id) => {
		try {
			const res = await fetch(`${URL}/quotes/${id}`);
			const data = await res.json();
			dispatch({ type: GET_QUOTE, payload: data });
		} catch (err) {
			dispatch({ type: ERROR, payload: 'Cannot Get Quote'});
		}
	};

	//Get A User's All Quotes
	const getUserQuotes = async (userId) => {};

	//Get A User's Quote
	const getUserQuote = async (id) => {};

	//Add Quote
	const addQuote = async (data, token) => {
	try{
		const res = await fetch(`${URL}/quotes/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": token,
			},
			body: JSON.stringify(data),
		});
		console.log(await res.json());
	}catch(err){
		dispatch({type:ERROR, payload:'Cannot Add Quote'});
	}
	};

	const updateQuote = async (id, data, token) => {
try{
			console.log(data);
			const res = await fetch(`${URL}/quotes/update/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"x-auth-token": token,
				},
				body: JSON.stringify(data)
			});
			console.log(await res.json());
		}
		catch(err){
			dispatch({type:ERROR, payload:'Cannot Update Quote'})
		}
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
				getUserQuote,
				addQuote,
				updateQuote,
			}}>
			{props.children}
		</QuotesContext.Provider>
	);
};

export default QuotesState;
