import "./AddCompany.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanyModel, CompanyPayloadModel } from "../../Models/UserModel";
import web from "../../Service/WebApi";
import notify from "../../Service/Notify";
import { useNavigate } from "react-router-dom";
import store from "../../Redux/Store/Store";
import { companyssAddedAction } from "../../Redux/Store/CompanyAppState";
import { BsPlusSquare } from "react-icons/bs";
import CustomLink from "../../Redux/CustomLink/CustomLink";


function AddCompany(): JSX.Element {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(" name is required"),
    email: yup.string().email("email is required").required("email is required"),
    password: yup.string().required("password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<CompanyPayloadModel>({ mode: "all", resolver: yupResolver(schema) });

  const yalla = async (company: CompanyPayloadModel) => {
    web
      .addCompany(company)
      .then((res) => {
        notify.success("haha new company created!!!!");
        navigate("/admin/companies");
        console.log(res.data);
        store.dispatch(companyssAddedAction(res.data))
      })
      .catch((err) => {
        notify.error( err);
      });
  };
  return (
    <div className="AddCompany flex-col-center font">
                <h1>Add company</h1>

      <form onSubmit={handleSubmit(yalla)} className="flex-col-center box">
                <label htmlFor="name">name</label>
                <input {...register("name")} type="text" placeholder="name" id="name"/>
                <span>{errors.name?.message}</span>
                <label htmlFor="email">email</label>
                <input {...register("email")} type="email" placeholder="email" id="email"/>
                <span>{errors.email?.message}</span>
                <label htmlFor="password">password </label>
                <input {...register("password")} type="password" placeholder="password" id="password"/>
                <span>{errors.password?.message}</span>
                <button className="button-success" disabled={!isValid}>add</button>
          </form>
    </div>
  );
}

export default AddCompany;
