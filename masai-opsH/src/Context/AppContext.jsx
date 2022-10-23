import React, { useReducer, useState } from "react";
import *as types from "./actionTypes"


export const AppContext=React.createContext()



const authReducer=(state,action)=>{

    const {type,payload} = action

    switch(type){

        case types.LOGIN_REQUEST:
            return {...state,isLoading:true}

        case types.LOGIN_SUCCESS:
            return {...state,isLoading:false,isAuth:true,token:payload.token}

        case types.LOGIN_FAILURE:
            return {...state,isLoading:true}

        case types.LOGOUT_SUCCESS:
            return {...state,isAuth:false,token:null}    

        default: return state
    }


}

function AppContextProvider({children}){

        const [state,dispatch] = useReducer(authReducer,{   
                                                         isLoading:false,
                                                         isAuth:false,
                                                         token:null
                                                        })

     return(

            <AppContext.Provider value={[state,dispatch]} >
                {children}
            </AppContext.Provider>

     )                                                   


}

export default AppContextProvider;
