export const signInEmail=(text)=>{
    return{
        type:"SIGNIN_EMAIL",
        payload:text
    }
}



export const signUpEmail=(text)=>{
    return{
        type:"SIGNUP_EMAIL",
        payload:text
    }
}

export const profile=(text)=>{
    return{
        type:"PROFILE",
        payload:text
    }
}


export const changePass=(text)=>{
    return{
        type:"CHANGE_PASS",
        payload:text
    }
}


export const deactivate=()=>{
    return{
        type:"DEACTIVATE",
        
    }
}


export const humanfollow=(item)=>{
    return{
        type:"FOLLOW",
        payload:item
    }
}

export const unfollow=(index)=>{
    return{
        type:"UNFOLLOW",
        payload:index
    }
}