import { CouponCategory } from "./CouponCategory";
import { ClientType } from "./ClientType";

export class CustomerModel{
    public email?: string;
    public id?:number;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public coupons?: CouponModel[];
  


    public constructor(email?: string ,id?: number, firstName?: string, lastName?: string, 
        password?: string, coupons?: CouponModel[]){
        this.email=email;
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.coupons=coupons;
        
}

}
export class CustomerPayLoadModel{
    public email?: string;
    public clientType?:ClientType;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
  


    public constructor(email?: string, clientType?: ClientType , firstName?: string, lastName?: string, 
        password?: string, ){
        this.email=email;
        this.clientType=clientType; 
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        
}
}
export class CompanyModel{
    public email?: string;
    public id?:number;
    public password?: string;
    public coupon?: CouponModel[];
    public name?: string;


    public constructor ( email?: string ,id?:number ,
        password?: string, coupon?: CouponModel[], name?: string){
        this.email=email;
        this.id=id;
        this.password=password;
        this.coupon=coupon;
        this.name=name
        
}
}
export class CompanyPayloadModel{
    public email?: string;
    public clientType?:ClientType;
    public password?: string;
    public name?: string;


    public constructor ( email?: string, clientType?: ClientType ,
        password?: string,  name?: string){
        this.email=email;
        this.clientType=clientType; 
        this.password=password;
        this.name=name
        
}
}
export class UserModel {
    public token?: string;
    public email?: string;
    public name?: string;
    public clientType?: ClientType;

    public constructor(token?: string,email?: string,clientType?: ClientType ,name?: string)  {
        this.token = token;
        this.email = email;
        this.name= name;
        this.clientType= clientType;

    }
}
export class CouponModel {
    public id?: number;
    public company?: CompanyModel;
    public category?: CouponCategory;
    public title?: string;
    public description?: string;
    public startDate?: Date;
    public endDate?: Date;
    public  amount?: number;  
    public price?: number;
    public image?: string;

  

    public constructor( id?: number, company?: CompanyModel, category?: CouponCategory, title?: string,
         description?: string, startDate?: Date, endDate?: Date, amount?: number, price?: number ,image?: string) {
            this.id=id;
            this.company=company;
            this.category=category;
            this.title=title;
            this.description=description;
            this.startDate=startDate;
            this.endDate=endDate;
            this.amount=amount;
            this.price=price;
            this.image=image;

    }
}

export class CouponPayLoadModel {
    public category?: CouponCategory;
    public title?: string;
    public description?: string;
    public startDate?: Date;
    public endDate?: Date;
    public  amount?: number;  
    public price?: number;
    public image?: string;

  

    public constructor( category?: CouponCategory, title?: string,
         description?: string, startDate?: Date, endDate?: Date, amount?: number, price?: number ,image?: string) {
            this.category=category;
            this.title=title;
            this.description=description;
            this.startDate=startDate;
            this.endDate=endDate;
            this.amount=amount;
            this.price=price;
            this.image=image;

    }
}
