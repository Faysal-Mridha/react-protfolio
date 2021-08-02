import { SET_PROJECT, DELETE_PROJECT} from '../action'

const iniTialState = {
    project: null,
};

const appReducer=(state=iniTialState,action)=>{
        switch(action.type){
            case SET_PROJECT:
            return{
                ...state,
                project:action.payload,
            }

            break;

            case DELETE_PROJECT: 
            return{
                ...state,
                project:null
            }
            break;

            default:
            return state
        }
    
    }

    export default appReducer;