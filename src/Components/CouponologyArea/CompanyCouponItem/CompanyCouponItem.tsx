import moment from "moment";
import { Table } from "react-bootstrap";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { CouponModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
import "./CompanyCouponItem.css";
interface CouponsItemProps {
    coupons:CouponModel
}

function CompanyCouponItem(props:CouponsItemProps): JSX.Element {
    
    return (
        <div className="CompanyCouponItem">
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.coupons.id}</td>
            <td>{props.coupons.category}</td>
            <td>{props.coupons.title}</td>
            <td>{props.coupons.description}</td>
            <td>{moment(props.coupons.startDate).format("DD/MM/YYYY")}</td>
            <td>{moment(props.coupons.endDate).format("DD/MM/YYYY")}</td>
            <td>{props.coupons.amount}</td>
            <td>{props.coupons.price}</td>
            <td> <CustomLink to={`deleteCoupon/${props.coupons.id}`}><MdDelete size={42} /></CustomLink></td>
            <td> <CustomLink to={`/updateCoupon/${props.coupons.id}`}><MdModeEdit size={42} /></CustomLink></td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
}

export default CompanyCouponItem;
