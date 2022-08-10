import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginModel } from "../../Models/WelcomeModel";
import Home from "../../PagesArea/Home/Home";
import store from "../../Redux/Store/Store";
import "./Menu.css";

function Menu(): JSX.Element {

      
    const [clientType, SetClientType] = useState(store.getState().loginReducer.user?.clientType);
    useEffect(()=>{
      return store.subscribe(() => {
        SetClientType(store.getState().loginReducer.user?.clientType)
      });
  },[])
    return (
        <div className="Menu">
            {clientType==="ADMINISTRATOR" ? (
        <>
           <Link className="link font" to="home"  >-Home-</Link>
           <Link className="link font" to="admin"> -Admin options-</Link>
           <Link className="link font" to="coupons"> -Coupons-</Link>
        </>
      ) : clientType==="CUSTOMER" ?(
        <>
           <Link className="link font" to="home"  >-home-</Link>
           <Link className="link font" to="coupons"> -coupons-</Link>
           <Link className="link font" to="customer/coupns"> -my coupons-</Link>

        </>
      ) : clientType==="COMPANY" ?(
        <>
           <Link  className="link font" to="home">-Home-</Link>
           <Link  className="link font" to="company">-Company option-</Link>
           <Link className="link font" to="coupons"> -Coupons-</Link>

        </>): <>
           <Link  className="link font" to="home">-Home- </Link>
           <Link  className="link font" to="about">-About-</Link>
           </>}
        </div>
    );
}

export default Menu;
