import { GET_ALL_QUOTES, GET_QUOTE, GET_USER_QUOTES, GET_USER_QUOTE } from "../types";

export default(state,action)=>{
    switch(action.type){
        case GET_ALL_QUOTES:
            return{
                ...state,
                quotes:action.payload,
                loading:false
            }
    }
}
