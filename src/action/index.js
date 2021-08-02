export const SET_PROJECT = "SET_PROJUCT";
export const DELETE_PROJECT = "DELETE_PROJECT";



export const setProject=(payload)=>{
    return{
        type: SET_PROJECT,
        payload: payload
    }
}

export const deleteProject=()=>{
    return{
        type: DELETE_PROJECT,
    }
}