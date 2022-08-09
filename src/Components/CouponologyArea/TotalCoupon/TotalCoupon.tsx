import { useEffect, useState } from "react";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import Circle from "../../SharedArea/Circle/Circle";
import "./TotalCoupon.css";

function TotalCoupon(): JSX.Element {

    const [num, setNum] = useState(store.getState().couponsReducer.coupons.length);
    useEffect(() => {
        if (num === 0) {
            web.couponCount()
                .then(res => {
                    setNum(res.data);
                })
                .catch(err => notify.error(err.message.value));
        }
        return store.subscribe(() => {
            setNum(store.getState().couponsReducer.coupons.length); 
        });
    }, [num]);


    return (
        <div className="TotalCoupon ">
            <Circle num={num}></Circle>
        </div>
    );
}

export default TotalCoupon;
