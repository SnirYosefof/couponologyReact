

import { UserModel } from "../../Models/UserModel";

export class AuthAppState{
    public user: UserModel =new UserModel();
    public constructor(){
        try{
        const storedUser = JSON.parse(localStorage.getItem('user')|| "");
        if(storedUser) {
            this.user = storedUser;
        }}
        catch{
            this.user=null;
        }
    }
}


// Step 2 - Define ActionType using enum for all required operations
export enum AuthActionType {
    Login = "Login",
    Logout = "Logout"
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface AuthAction {
    type: AuthActionType;
    payload?: any; // ? for logout
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action


export function loginAction(user: UserModel): AuthAction {
    return { type: AuthActionType.Login ,payload:user};
}

export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout};
}

// Step 5 - Reducer function perform the required action
export function loginReducer(currentState: AuthAppState = new AuthAppState(),
                            action:AuthAction): AuthAppState{

    const newState = {...currentState} //Spread Operator
    switch(action.type){
        case AuthActionType.Login://Payload is logged i user from backend
            newState.user = action.payload;
            localStorage.setItem("user",JSON.stringify(newState.user)); // Saving in the session storage (won't be deleted)
            break;
        case AuthActionType.Logout: // No payload
            newState.user = null;
            localStorage.removeItem("user");
            break;
            
    }
    return newState;
    
}