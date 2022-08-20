import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CompanyModel, CouponModel } from "../../Models/UserModel";
import { couponAddedAction } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./CouponItem.css";
interface CouponItemProps {
  coupon:CouponModel
}
function CouponItem(props: CouponItemProps): JSX.Element {
  const navigate = useNavigate();
  
  const purchase=()=>{
    yalla(props.coupon);
  }

  const yalla = async (coupon: CouponModel) => {
    console.log(coupon);
    web
      .purchase(coupon)
      .then((res) => {
        notify.success("you purchase a coupon!!!!");
        navigate("/buy");
      })
      .catch((err) => {
        navigate("/coupons");
        notify.error( err);
      });
  };
  return (
    <div className="CouponItem text-dark text-lowercase flex-col-center ">
      <Card className="color " style={{ width: "14rem" }}>
        <Card.Img variant="top" src={props.coupon.image} />
        <Card.Body className="flex-col-center font">
        <Card.Text>
          <Card.Title>
            {props.coupon.title}
            </Card.Title>
          </Card.Text>
          <Card.Text>
          {props.coupon.description}          
          </Card.Text>
          <Card.Text>
          <span>company-</span>
          {props.coupon.company.name}          
          </Card.Text>
          <Card.Text>
          <span>start at-</span>
          {moment(props.coupon.startDate).format("DD/MM/yyyy")}
          </Card.Text>
          <Card.Text>
          <span>end at-</span>
          {moment(props.coupon.endDate).format("DD/MM/yyyy")}
          </Card.Text>
          <Card.Text>
          <span>amount-</span>
          {props.coupon.amount}
          </Card.Text>
          <Card.Text>
          <span>price-</span>
          {props.coupon.price}
          </Card.Text>
          <Button  onClick={purchase}   variant="primary"> purchase</Button>
        </Card.Body>
      </Card>
    </div>
 
    );
}


export default CouponItem;


