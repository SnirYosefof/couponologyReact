
import { ClientType } from "./ClientType";

export class LoginModel{
    public email?: string;
    public password?: string;
    public clientType?:ClientType;
    public name?:string;



    public constructor (email?: string, password?: string , clientType?: ClientType, name?:string){
        this.email = email;
        this.password = password;
        this.clientType= clientType;
        this. name =name;
    }
}


export class LoginReqModel{
    public email?: string;
    public password?: string;
    public clientType?:ClientType;
    public name?:string;


    public constructor (email?: string, password?: string , clientType?: ClientType,name?:string){
        this.email = email;
        this.password = password;
        this.clientType= clientType;
        this.name= name;
    }
}

