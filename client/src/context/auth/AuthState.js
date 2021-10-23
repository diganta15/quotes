import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { SIGN_IN } from "../types";

const URL = 'http://localhost:8000' 
const AuthState = (props) => {
	const initialState = {
		userEmail: null,
		jwt: "",
		errors: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	//load user
	const loaduser = (token) =>{

	}
	//sign up
	const signup = async(formData) => {
		const res = await fetch(`${URL}/user/signup`,{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(formData)
		});
		const data = await res.json();
		console.log(data);
		dispatch({type:SIGN_IN, payload:data});
	};
	//login
	const login = (data) => {
		console.log("Log in");
	};
	//log out
	const logout = () => {};

	return (
		<AuthContext.Provider
			value={{
				userEmail: state.userEmail,
				jwt: state.jwt,
				errors: state.errors,
                signup,
                login,
                logout
			}}>
			{props.children }
		</AuthContext.Provider>
	);
};

export default AuthState;
