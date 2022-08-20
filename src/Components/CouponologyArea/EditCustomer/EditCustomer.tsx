import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerModel, CustomerPayLoadModel } from "../../Models/UserModel";
import store from "../../Redux/Store/Store";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./EditCustomer.css";
import web from "../../Service/WebApi";
import { customerUpdatedAction } from "../../Redux/Store/CustomerAppState";
import notify from "../../Service/Notify";

function EditCustomer(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();
    const customerId = +(params.id || 0);
  
    const [id, setId] = useState<number>(customerId);
    const [customer,setCustomer]=useState<CustomerModel> (store.getState().customersReducer.customers.filter(c=>c.id===id)[0]);
    console.log(customer);
    console.log(store.getState().customersReducer.customers);
    const [origin, setOrigin] = useState<CustomerPayLoadModel>({
      firstName:customer.firstName || "",
     lastName:customer.lastName || "",
     email:customer.email || "", 
     password:customer.password || "",
    });
  
    const schema = yup.object().shape({
      firstName: yup.string().required(" firstName is required"),
        lastName: yup.string().required("lastName is required"),
        email: yup.string().email("email is required").required("email is required"),
        password: yup.string().required("password is required"),
    });
  
    let defaultValuesObj = { ...origin };
  
    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
    = useForm<CustomerPayLoadModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });
  
  const { dirtyFields } = useFormState({
    control
  });
     
  const yalla = async (customer: CustomerPayLoadModel) => {
    web
      .updateCustomer(id,customer)
      .then((res) => {
        notify.success(" the customer has been updated!!!!");
        navigate("/admin/customers");
        store.dispatch(customerUpdatedAction(res.data))
      })
      .catch((err) => {
        notify.error("oops :" + err.message);
      });
  };
  
      return (
        <div className="EditCompany flex-col-center font">
        <h1>Edit customer</h1>
  
  <form onSubmit={handleSubmit(yalla)} className="flex-col-center box font">
  <label htmlFor="firstName">firstName</label>
        <input {...register("firstName")} type="text" placeholder="firstName" id="firstName"/>
        <span>{errors.firstName?.message}</span> 
        <label htmlFor="lastName">lastName</label>
        <input {...register("lastName")} type="text" placeholder="lastName" id="lastName"/>
        <span>{errors.lastName?.message}</span>
        <label htmlFor="email">email</label>
        <input {...register("email")} type="email" placeholder="email" id="email"/>
        <span>{errors.email?.message}</span>
        <label htmlFor="password">password </label>
        <input {...register("password")} type="password" placeholder="password" id="password"/>
        <span>{errors.password?.message}</span>
        <button className="button-success" disabled={!isDirty}>update</button>
  </form>
  </div>
      );
  }
    

export default EditCustomer;
