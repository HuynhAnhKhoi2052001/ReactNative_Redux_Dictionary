export const set=(payload)=> {
    return{
        type:"SET",
        payload:payload
    }
}

export const add =(payload)=>{
    return{
        type:"ADD",
        payload:payload
    }
}