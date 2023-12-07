const initState ={
    id:"",
    username:"",
    password:"",
    english:[{}],
    vietnamese:[{}]
}
const reducer = (state =initState,action)=>{
switch(action.type){
    case "SET":
        return{
            ...state,
               id:action.payload.id,
               username:action.payload.username,
               password:action.payload.password,
               english:action.payload.english,
               vietnamese:action.payload.vietnamese
        }
    case "ADD":
        return{
            ...state,
            english:[...state.english,action.payload.english],
            vietnamese:[...state.vietnamese,action.payload.vietnamese]
        }
    default:
        return state;
}
}
export default reducer;