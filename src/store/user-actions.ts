import userSlice from './user-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {UserModel} from "../models/user-model";
import UserService from "../service/userService";

export const userActions=userSlice.actions

export const fetchUsers=(search:string,sort:string,order:string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    
    return async(dispatch,getState)=>{
        const response:UserModel[]=await UserService.getAllUsers(search,sort,order);
        dispatch(userActions.setUsers(response))
    }

}
export const fetchIndividualUser=(id:string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{  
        const response:UserModel=await UserService.getUser(id);
        dispatch(userActions.setIndividualUser(response))  
    }
}
export const createUser=(user:UserModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{  
        const response:UserModel[]=await UserService.createUser(user);
        dispatch(userActions.setUsers(response))  
    }
}
export const updateUser=(id:string,user:UserModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{  
        const response:UserModel[]=await UserService.updateUser(id,user);
        dispatch(userActions.setUsers(response))  
    }
}
export const deleteUser=(id:string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{  
        const response:UserModel[]=await UserService.deleteUser(id);
        dispatch(userActions.setUsers(response))  
    }
}