import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { couponDeletedActoin } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./DeleteCoupon.css";

function DeleteCoupon(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);
    const [id, setId] = useState<number>(couponId);


    const no = () => {
        navigate("/company/coupons");
      };
      const yes = () => {
        web.deleteCompanyCoupon(id)
        .then(res => {
            notify.success('woho deleted successfully');
            navigate('/company/coupons');
            store.dispatch(couponDeletedActoin(id))
        })
        .catch(err => {
            notify.error(err);
            navigate('/company/coupons');
        });
      }
    return (
        <div className="DeleteCoupon flex-col-center">
          <h1>Delete coupon</h1>
          <h3>Are you sure you want to delete coupon #{id}?</h3>
          <div className="flex-row box"> 
            <button className="button-danger" onClick={yes}>yes</button>
            <button className="button" onClick={no}>no</button>
          </div>
        </div>
    );
}

export default DeleteCoupon;
