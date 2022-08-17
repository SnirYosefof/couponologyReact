import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyModel, CompanyPayloadModel } from "../../Models/UserModel";
import store from "../../Redux/Store/Store";
import "./EditCompany.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import web from "../../Service/WebApi";
import notify from "../../Service/Notify";
import { companyssUpdatedAction } from "../../Redux/Store/CompanyAppState";

function EditCompany(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const companyId = +(params.id || 0);

  const [id, setId] = useState<number>(companyId);
  console.log(store.getState().companysReducer.companys);
  const [company,setCompany]=useState<CompanyModel> (store.getState().companysReducer.companys.filter(c=>c.id===id)[0])
  console.log(company);
  const [origin, setOrigin] = useState<CompanyPayloadModel>({
    name: company.name,
    email:company.email,
    password:company.password,
  });

  const schema = yup.object().shape({
    email: yup.string().email("email is required").required("email is required"),
    password: yup.string().required("password is required"),
  });

  let defaultValuesObj = { ...origin };

  const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
  = useForm<CompanyPayloadModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

const { dirtyFields } = useFormState({
  control
});
   
const yalla = async (company: CompanyPayloadModel) => {
   web
    .updateCompany(id,company)
    .then((res) => {
      notify.success(" the company updated!!!!");
      navigate("/admin/companys");
      store.dispatch(companyssUpdatedAction(res.data))
    })
    .catch((err) => {
      notify.error( err);
    });
};

    return (
      <div className="EditCompany flex-col-center">
      <h1>Edit company</h1>

<form onSubmit={handleSubmit(yalla)} className="flex-col-center box">
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

export default EditCompany;
