import { SIGN_IN } from "../types";
import jwt from 'jsonwebtoken';

export default (state,action)=>{
    switch(action.type){
        case SIGN_IN:
            
            return{
                ...state,
                jwt:action.payload,

            }
        
        default:
            return {
                ...state
            }
    }
}