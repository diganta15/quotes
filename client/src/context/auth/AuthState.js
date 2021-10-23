import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { ERROR, SIGN_IN, REGISTER, LOAD_USER } from "../types";

const URL = "http://localhost:8000";
const AuthState = (props) => {
	const initialState = {
		userEmail: null,
		jwt: "",
		errors: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	//load user
	const loaduser = async (token) => {
		try {
			const res = await fetch(`${URL}/user/getuser`, {
				headers: {
					"x-auth-token": token,
				},
			});
			const data = await res.json();
			console.log(data);
			dispatch({ type: LOAD_USER, payload: data });
		} catch (err) {
			console.log(err);
		}
	};
	//sign up
	const signup = async (formData) => {
		try {
			const res = await fetch(`${URL}/user/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			dispatch({ type: REGISTER, payload: data });
			localStorage.setItem("token", data.jwt);
		} catch (err) {
			dispatch({ type: ERROR, payload: "Cannot Register User" });
		}
	};
	//login
	const login = async (formData) => {
		try {
			const res = await fetch(`${URL}/user/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			localStorage.setItem("token", data.jwt);
			console.log(data);
			dispatch({ type: SIGN_IN, payload: data });
		} catch (err) {
			dispatch({ type: ERROR, payload: "Cannot Log In" });
		}
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
				logout,
				loaduser,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
