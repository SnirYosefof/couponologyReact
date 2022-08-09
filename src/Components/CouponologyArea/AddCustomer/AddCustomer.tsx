import { useForm } from "react-hook-form";
import { CustomerModel, CustomerPayLoadModel } from "../../Models/UserModel";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./AddCustomer.css";
import { useNavigate } from "react-router-dom";
import store from "../../Redux/Store/Store";
import { customerAddedAction } from "../../Redux/Store/CustomerAppState";


function AddCustomer(): JSX.Element {
  const navigate = useNavigate();

    const schema = yup.object().shape({
        firstName: yup.string().required(" firstName is required"),
        lastName: yup.string().required("lastName is required"),
        email: yup.string().email("email is required").required("email is required"),
        password: yup.string().required("password is required"),
      });
      const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
      useForm<CustomerPayLoadModel>({ mode: "all", resolver: yupResolver(schema) });
      
      const yalla = async (customer:CustomerPayLoadModel)=>{
        web.addCustomer(customer)
         .then(res =>{notify.success(" new customer  created!!!!"); navigate('/admin/customers')
         store.dispatch(customerAddedAction(res.data));
         ;
     })
         .catch(err =>{notify.error("oops :" +err)})
     }
     
    
      
    
      return (
        <div className="AddCustomer flex-col-center">
          <h1>Add customer</h1>
    
                <form onSubmit={handleSubmit(yalla)} className="flex-col-center box" >
          <label htmlFor="firstName">firstName</label>
            <input {...register("firstName")} type="text" placeholder="firstName" id="firstName"></input>
            <span>{errors.firstName?.message}</span>
            <label htmlFor="lastName">lastName</label>
            <input {...register("lastName")} type="text" placeholder="lastName" id="lastName"></input>
            <span>{errors.lastName?.message}</span>
            <label  htmlFor="email">email</label>
            <input   {...register("email")} type="email" placeholder="email" id="email"></input>
            <span>{errors.email?.message}</span>
            <label htmlFor="password">password</label>
            <input  {...register("password")} type="password" placeholder="password"></input>
            <span>{errors.password?.message}</span>
            
            <button className="button-success" disabled={!isValid}>add</button>
                    </form>
    
      
        </div>
      );
    }


export default AddCustomer;
