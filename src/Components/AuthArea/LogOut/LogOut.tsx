import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CouponClear, couponDeletedActoin } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import { logoutAction } from "../../Redux/Store/UserAppState";
import "./LogOut.css";

function LogOut(): JSX.Element {
    const navigate=useNavigate();

    useEffect(()=>{
        const res= window.confirm("are you sure you want to log out")
        if (res){
            store.dispatch(logoutAction())
            store.dispatch(CouponClear())
            navigate("/bye")
        }
    },[])
    return (
        <>
			
        </>
    );
}

export default LogOut;
