import { ERROR, LOAD_USER, LOG_OUT, REGISTER, SIGN_IN } from "../types";
import jwt from "jsonwebtoken";

export default (state, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				userEmail: action.payload.email,
				userId: action.payload.id,
			};
		case REGISTER:
			return {
				...state,
				userEmail: action.payload.email,
				userId: action.payload.id,
			};
		case LOAD_USER:
			return {
				...state,
				userEmail: action.payload.email,
				userId: action.payload.id,
			};
		case LOG_OUT:
			return {
				...state,
				userEmail: null,
                userId:null,
             
			};
		case ERROR:
			return {
				...state,
				errors: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};
