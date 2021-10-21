import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
	const initialState = {
		userEmail: null,
		jwt: "",
		errors: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	//load user

	//sign up
	const signup = (data) => {
		console.log("Signup");
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
