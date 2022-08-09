import moment from "moment";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { CouponModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
import { couponsDownloadedAction } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import CompanyCouponItem from "../CompanyCouponItem/CompanyCouponItem";
import "./CompanyCouponList.css";


function CompanyCouponList(): JSX.Element {
    const [coupons,setCoupons]=useState<CouponModel[]>([]);


    useEffect(()=>{
        web.getAllCompanyCoupons()
        .then((res)=>{
            notify.success("whoho!")
            setCoupons(res.data);
            store.dispatch(couponsDownloadedAction(res.data));

        })
        .catch((err)=>{
            notify.error(err.message)
        })
    },[])

    return (
        <div className="CompanyCouponList flex-col-center">
			<h1>company coupons</h1>
            <CustomLink to="/company/addCoupon"><BsPlusSquare size={42} /></CustomLink>
            {/* {coupons.map(c=><CompanyCouponItem key={c.id} coupons={c}/>)} */}
            <Table striped bordered hover>
<thead>
    <tr>
  <th>Id</th>
  <th> category</th>
  <th>title</th>
  <th>description</th>
  <th>startDate</th>
  <th>endDate</th>
  <th>price</th>
  <th>amount</th>
  <th></th>
  <th></th>
  </tr>
</thead>
{coupons.map((coupons, index) => (
  <tbody>
    <tr data-index={index}>
      <td>{coupons.id}</td>
      <td>{coupons.category}</td>
      <td>{coupons.title}</td>
      <td>{coupons.description}</td>
      <td>{moment(coupons.startDate).format("DD/MM/yyyy")}</td>
      <td>{moment(coupons.endDate).format("DD/MM/yyyy")}</td>
      <td>{coupons.price}</td>
      <td>{coupons.amount}</td>

      <td>
        {" "}
        <CustomLink to={`deleteCoupo/${coupons.id}`}>
          <MdDelete size={42} />
        </CustomLink>
      </td>
      <td>
        <CustomLink to={`/updateCoupon/${coupons.id}`}>
          <MdModeEdit size={42} />
        </CustomLink>
      </td>
    </tr>
  </tbody>
))}
</Table>
        </div>
    );
}

export default CompanyCouponList;

