import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import Login from "../../AuthArea/Login/Login";
import LogOut from "../../AuthArea/LogOut/LogOut";
import AddCompany from "../../CouponologyArea/AddCompany/AddCompany";
import AddCoupon from "../../CouponologyArea/AddCoupon/AddCoupon";
import AddCustomer from "../../CouponologyArea/AddCustomer/AddCustomer";
import CompanyCouponItem from "../../CouponologyArea/CompanyCouponItem/CompanyCouponItem";
import CompanyCouponList from "../../CouponologyArea/CompanyCouponList/CompanyCouponList";
import CouponList from "../../CouponologyArea/CouponList/CouponList";
import CustomerCouponList from "../../CouponologyArea/CustomerCouponList/CustomerCouponList";
import DeleteCompany from "../../CouponologyArea/DeleteCompany/DeleteCompany";
import DeleteCoupon from "../../CouponologyArea/DeleteCoupon/DeleteCoupon";
import DeleteCustomer from "../../CouponologyArea/DeleteCustomer/DeleteCustomer";
import EditCompany from "../../CouponologyArea/EditCompany/EditCompany";
import EditCoupon from "../../CouponologyArea/EditCoupon/EditCoupon";
import EditCustomer from "../../CouponologyArea/EditCustomer/EditCustomer";
import About from "../../PagesArea/About/About";
import AdminAbility from "../../PagesArea/AdminAbility/AdminAbility";
import BuyCoupon from "../../PagesArea/BuyCoupon/BuyCoupon";
import Bye from "../../PagesArea/Bye/Bye";
import ComapnyInformation from "../../PagesArea/ComapnyInformation/ComapnyInformation";
import CompanyAbility from "../../PagesArea/CompanyAbility/CompanyAbility";
import CustomersInformtion from "../../PagesArea/CustomersInformtion/CustomersInformtion";
import Home from "../../PagesArea/Home/Home";
import RoungClient from "../../PagesArea/RoungClient/RoungClient";
import WantLogOut from "../../PagesArea/WantLogOut/WantLogOut";
import Page404 from "../Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<BuyCoupon />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<WantLogOut />} />
        <Route path="/bye" element={<Bye />} />
        <Route path="/admin" element={<AdminAbility />} />
        <Route path="/admin/companies" element={<ComapnyInformation />} />
        <Route path="/admin/customers" element={<CustomersInformtion />} />
        <Route path="/admin/addCompany" element={<AddCompany />} />
        <Route path="updateCompany/:id" element={<EditCompany />} />
        <Route path="/admin/companies/deleteCompany/:id" element={<DeleteCompany />} />
        <Route path="/admin/addCustomer" element={<AddCustomer />} />
        <Route path="/updateCustomer/:id" element={<EditCustomer />} />
        <Route path="/coupons" element={<CouponList />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/customers/deleteCustomer/:id" element={<DeleteCustomer />} />
        <Route path="/company" element={<CompanyAbility />} />
        <Route path="/company/coupons" element={<CompanyCouponList />} />
        <Route path="/company/addCoupon" element={<AddCoupon />} />
        <Route path="/updateCoupon/:id" element={<EditCoupon />} />
        <Route path="/customer/coupns" element={<CustomerCouponList />} />
        <Route path="/company/coupons/deleteCoupon/:id" element={<DeleteCoupon />} />
        <Route path="/ops" element={<RoungClient />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
