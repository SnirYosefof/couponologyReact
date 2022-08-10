import { Link } from "react-router-dom";
import "./BuyCoupon.css";

function BuyCoupon(): JSX.Element {
  return (
    <div className="BuyCoupon flex-col-center font2">
      <h1> Pyyyyyy you buy a coupon!</h1>
      <iframe
        src="https://giphy.com/embed/J147q8Ip0EmLQFJOPZ
            "
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p><Link className="link3" to="/customer/coupns">My coupons</Link></p>
    </div>
  );
}

export default BuyCoupon;
