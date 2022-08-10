import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { CouponModel } from "../../Models/UserModel";
import "./CustomerCouponItem.css";
interface CouponItemProps {
    coupon:CouponModel
  }
function CustomerCouponItem(props:CouponItemProps): JSX.Element {
    return (
        <div className="CustomerCouponItem font2">
			<div className="CouponItem text-dark text-lowercase flex-col-center font2">
      <Card className="color" style={{ width: "14rem" }}>
        <Card.Img variant="top" src={props.coupon.image} />
        <Card.Body className="flex-col-center">
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
        </Card.Body>
      </Card>
        </div>
        </div>
    );
}

export default CustomerCouponItem;
