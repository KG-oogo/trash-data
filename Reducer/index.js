import { combineReducers } from "redux";
import {ADD_UPDATE_PICTURE} from "./types";


const addUpdateReducer = (state= {items:{}}, action) =>{
	switch(action.type){
		default:
			return state;
	}
}


const reducer = combineReducers({
  addUpdateReducer,
});

export default reducer;