import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CouponClear } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import { logoutAction } from "../../Redux/Store/UserAppState";
import "./WantLogOut.css";

function WantLogOut(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);

    const no = () => {
        navigate("/home");
      };
      const yes = () => {
        store.dispatch(logoutAction())
        store.dispatch(CouponClear())
        navigate("/bye")
        };
    const [id, setId] = useState<number>(couponId);
    return (
        <div className="WantLogOut">
			 <div className="DeleteCoupon flex-col-center">
          <h1>logout</h1>
          <h3>Are you sure you want to logout?</h3>
          <div className="flex-row box"> 
            <button className="button-danger" onClick={yes}>yes</button>
            <button className="button" onClick={no}>no</button>
          </div>
        </div>
        </div>
    );
}



 
export default WantLogOut;
