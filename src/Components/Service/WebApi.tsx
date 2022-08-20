import axios, { Axios } from "axios";
import { CouponCategory } from "../Models/CouponCategory";
import { CompanyModel, CouponModel, CouponPayLoadModel, CustomerModel, CustomerPayLoadModel, UserModel } from "../Models/UserModel";
import { LoginReqModel } from "../Models/WelcomeModel";
import globals from "./Globals";
import tokenAxios from "./InterceptorAxios";

class WebApi {
    [x: string]: any;
private adminApi= globals.urls.admin;
private companyApi= globals.urls.company;
private customerApi= globals.urls.customer;
  

//company
public async getAllCompany(): Promise<any> {
    return await tokenAxios.get<CompanyModel[]>(this.adminApi+"allCompanies");
}
public async addCompany(company:CompanyModel): Promise<any> {
    return await tokenAxios.post<CompanyModel>(this.adminApi,company);
}
public async updateCompany(id:number ,company: CompanyModel): Promise<any> {
    return await tokenAxios.put<any>(this.adminApi +id, company);
}
public async deleteCompany(id: number): Promise<any> {
    return await tokenAxios.delete<any>(this.adminApi  + id);
}
//customer
public async customerCount(): Promise<any>{
    return await tokenAxios.get<any>(this.adminApi + "countCustomer")
}
public async getAllCustomer(): Promise<any> {
    return await tokenAxios.get<CustomerModel[]>(this.adminApi+"allCustomers");
}
public async addCustomer(customer:CustomerModel): Promise<any> {
    return await tokenAxios.post<CustomerModel>(this.adminApi+"customer",customer);
}
public async updateCustomer(id:number ,customer: CustomerPayLoadModel): Promise<any> {
    console.log(customer);
    return await tokenAxios.put<any>(this.adminApi + "customer/" + id, customer);
}

public async deleteCustomer(id: number): Promise<any> {
    return await tokenAxios.delete<any>(this.adminApi + "customer/" + id);
}

//coupon

public async getAllCoupons(): Promise<any>{
    return await tokenAxios.get<any>(this.adminApi + "allCoupons")
}
public async couponCount(): Promise<any>{
    return await tokenAxios.get<any>(this.adminApi + "countCoupon")
}




//Company
public async companyCount(): Promise<any>{
    return await tokenAxios.get<any>(this.adminApi + "countCompany")
}
public async getAllCompanyCoupons(): Promise<any>{
    return await tokenAxios.get<any>(this.companyApi + "coupons")
}
public async deleteCompanyCoupon(id: number): Promise<any> {
    return await tokenAxios.delete<any>(this.companyApi + id);
}
public async addCoupon( coupon:CouponModel): Promise<any> {
    return await tokenAxios.post<CompanyModel>(this.companyApi ,coupon);
}
public async updateCoupon(id:number ,coupon:CouponModel): Promise<any> {
    return await tokenAxios.put<CompanyModel>(this.companyApi+ id,coupon);
}

//customer
public async getAllCustomerCoupons(): Promise<any>{
    return await tokenAxios.get<any>(this.customerApi + "coupons")
}

public async purchase( coupon:CouponModel): Promise<any> {
    return await tokenAxios.post<CompanyModel>(this.customerApi +"purchase",coupon);
}
public async getAllCouponByCategory(category:CouponCategory): Promise<any>{
    return await tokenAxios.get<any>(this.customerApi + "couponsCategory/" )
}


//login
public async LoginAdmin(loginReqModel:LoginReqModel):Promise<any>{
    return await axios.post<UserModel>(this.adminApi+'login', loginReqModel)
}
public async LoginCompany(loginReqModel:LoginReqModel):Promise<any>{
    return await axios.post<UserModel>(this.companyApi+'login', loginReqModel)
}
public async LoginCustomer(loginReqModel:LoginReqModel):Promise<any>{
    return await axios.post<UserModel>(this.customerApi+'login', loginReqModel)
}
}
const web = new WebApi();
export default web;