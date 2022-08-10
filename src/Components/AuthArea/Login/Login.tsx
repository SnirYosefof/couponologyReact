import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {  LoginModel, LoginReqModel } from "../../Models/WelcomeModel";
import { useNavigate } from "react-router-dom";
import web from "../../Service/WebApi";
import notify from "../../Service/Notify";
import store from "../../Redux/Store/Store";
import { loginAction } from "../../Redux/Store/UserAppState";
import { ClientType } from "../../Models/ClientType";
import { useState } from "react";

function Login(): JSX.Element {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    clientType: yup
    .string()
    .required("clientType"),
    email: yup
      .string()
      .email("invalid email address")
      .required("email is required"),
    password: yup
      .string()
      .min(3, "at lest 3 characters")
      .max(8, "at most to be 8  characters")
      .required("password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });


 
   
    const loginCustomer = async (model: LoginModel) => {
      const req = new LoginReqModel();
      req.email = model.email;
      req.password = model.password;
      req.clientType = model.clientType;
      req.name = model.name ;

          web
          .LoginCustomer(req)
          .then((res) => {
            notify.success("login successfully");
            store.dispatch(loginAction(res.data));
            navigate("/coupons");
          })
          .catch((err) => {
            notify.error(err);
          });
    
      }
     const LoginCompany = async (model: LoginModel) => {
      const req = new LoginReqModel();
      req.email = model.email;
      req.password = model.password;
      req.clientType = model.clientType;
      req.name = model.name ;
          web
          .LoginCompany(req)
          .then((res) => {
            notify.success("login successfully");
            store.dispatch(loginAction(res.data));
            navigate("/company");
          })
          .catch((err) => {
            notify.error(err);
          });
    
      }
     const LoginAdmin = async (model: LoginModel) => {
      const req = new LoginReqModel();
      req.email = model.email;
      req.password = model.password;
      req.clientType = model.clientType;
      req.name="admin";
          web
          .LoginAdmin(req)
          .then((res) => {
            notify.success("login successfully");
            store.dispatch(loginAction(res.data));
            navigate("/admin");
          })
          .catch((err) => {
            notify.error(err);
          });
      }

      const login = ((model: LoginModel)=>{
        switch (model.clientType){
          case "ADMINISTRATOR":
            LoginAdmin(model)
            break;
            case "CUSTOMER":
            loginCustomer(model)
            break;
            case "COMPANY":
            LoginCompany(model)
            break;

        }
      })
    
  return (
    
   <div className="Login flex-col-center font2 ">
     
      <h1>Login</h1>
      <div >
      <form onSubmit={handleSubmit(login)}className="flex-col-center box" >
    
      <label htmlFor="clientType">ClientType</label>
      <select {...register("clientType")}  placeholder="clientType" id="clientType">
              clientType
              <option value="" disabled={true} >clientType</option>
            <option value="ADMINISTRATOR">{ClientType.ADMINISTRATOR}</option>
            <option value="CUSTOMER">{ClientType.CUSTOMER}</option>
            <option value="COMPANY">{ClientType.COMPANY}</option>
          </select>  
          <span>{errors.clientType?.message}</span>        
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            id="email"
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
            id="password"
          />
          <span>{errors.password?.message}</span>
          <button className="button-success" disabled={!isValid}>
            Login
          </button>
        </form>
        </div>
      </div>
  );
  };

export default Login;
