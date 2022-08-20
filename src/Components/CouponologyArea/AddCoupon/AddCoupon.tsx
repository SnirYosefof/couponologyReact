import { useNavigate, useParams } from "react-router-dom";
import "./AddCoupon.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CouponPayLoadModel } from "../../Models/UserModel";
import web from "../../Service/WebApi";
import notify from "../../Service/Notify";
import store from "../../Redux/Store/Store";
import { couponAddedAction } from "../../Redux/Store/CouponAppState";
import { CouponCategory } from "../../Models/CouponCategory";

function AddCoupon(): JSX.Element {
  const navigate = useNavigate();
  const date=new Date;
  const date2=date;

  const schema = yup.object().shape({
    category: yup.string().required("category is required"),
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
    startDate: yup
      .date()
      .min(date, "Umm... future dob? come on!")
      .default(new Date())
      .typeError("You must specify a startDate")
      .required("dueDate is required")
      .nullable()
      .default(() => new Date()),
    endDate: yup
      .date()
      .min(yup.ref('startDate'),"end date can't be before start date")
      .default(new Date())
      .typeError("You must specify a startDate")
      .required("dueDate is required")
      .nullable()
      .default(() => new Date()),
      amount: yup.number()
      .min(0,"amount must be greater than zero")
      .typeError("You must specify a number")

      .default(1)
      .required("amount is required"),
      price: yup.number()
      .min(0,"the price must be greater than zero")
      .default(1)
      .typeError("You must specify a number")
      .required("price is required"), 
      image: yup.string()
      .required("image is required"),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<CouponPayLoadModel>({ mode: "all", resolver: yupResolver(schema) });

  const yalla = async (coupon: CouponPayLoadModel) => {
    web
      .addCoupon(coupon)
      .then((res) => {
        notify.success("haha new coupon created!!!!");
        navigate("/company/coupons");
        store.dispatch(couponAddedAction(res.data))
      })
      .catch((err) => {
        notify.error("oops :" + err);
      });
  };

  return (
  <div className="AddCoupon  flex-col-center font">
      <h1>add coupon</h1>
       <form onSubmit={handleSubmit(yalla)} className="flex-col-center box">
       <label htmlFor="category">category</label>
      <select {...register("category")}  placeholder="category" id="category">
      category
              <option value="" disabled={true} >clientType</option>
            <option value="FOOD">{CouponCategory.FOOD}</option>
            <option value="SHOW">{CouponCategory.SHOW}</option>
            <option value="VACATIONS">{CouponCategory.VACATIONS}</option>
            <option value="ELECTRONICS">{CouponCategory.ELECTRONICS}</option>
          </select>  
                <label htmlFor="title">title</label>
                <input {...register("title")} type="text" placeholder="title" id="emtitleail"/>
                <span>{errors.title?.message}</span>
                <label htmlFor="description">description </label>
                <input {...register("description")} type="text" placeholder="description" id="description"/>
                <span>{errors.description?.message}</span> 
                <label htmlFor="startDate">startDate </label>
                <input {...register("startDate")} type="date" placeholder="startDate" id="startDate"/>
                <span>{errors.startDate?.message}</span>  
                <label htmlFor="endDate">endDate </label>
                <input {...register("endDate")} type="date" placeholder="endDate" id="endDate"/>
                <span>{errors.endDate?.message}</span> 
                 <label htmlFor="amount">amount </label>
                <input {...register("amount")} type="text" placeholder="amount" id="amount"/>
                <span>{errors.amount?.message}</span>  
                <label htmlFor="price">price </label>
                <input {...register("price")} type="text" placeholder="price" id="price"/>
                <span>{errors.price?.message}</span> 
                 <label htmlFor="image">image </label>
                <input {...register("image")} type="text" placeholder="image" id="image"/>
                <span>{errors.image?.message}</span>
                <button className="button-success" disabled={!isValid}>add</button>
          </form>
  </div>);
}

export default AddCoupon;
