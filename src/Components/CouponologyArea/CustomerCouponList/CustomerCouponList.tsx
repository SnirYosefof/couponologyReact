import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CouponCategory } from "../../Models/CouponCategory";
import { CouponModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
import { couponsDownloadedAction } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import CustomerCouponItem from "../CustomerCouponItem/CustomerCouponItem";
import "./CustomerCouponList.css";

function CustomerCouponList(): JSX.Element {
  const [origin, setOrigin] = useState<CouponModel[]>([]);
  const [coupons, setCoupons] = useState<CouponModel[]>([]);

  const handleChange = (category: string) => {
    if (category !== 'All') {
        setCoupons(origin.filter(c => c.category === category));
    } else {
        setCoupons(origin)
    }
}
  useEffect(() => {
    web
      .getAllCustomerCoupons()
      .then((res) => {
        notify.success("yalla which a coupons");
        setCoupons(res.data);
        setOrigin(res.data);
        store.dispatch(couponsDownloadedAction(res.data));
      })
      .catch((err) => {
        notify.error(err);
      });
  }, []);
  return (
    <div className="CustomerCouponList flex-col-center font2">
      <h1 className="">coupons list</h1>
      <select defaultValue={'All'} onChange={(e) => handleChange(e.target.value)}>
        CouponCategory
        <option value="" disabled={true}>
          CouponCategory
        </option>
        <option value="All">All </option>
        <option value="ELECTRONICS">{CouponCategory.ELECTRONICS}</option>
        <option value="FOOD">{CouponCategory.FOOD}</option>
        <option value="SHOW">{CouponCategory.SHOW}</option>
        <option value="COMPANY">{CouponCategory.VACATIONS}</option>
      </select>
      {coupons.length > 0 ? (
        <div className="flex-row-none-wrap-list cards-lists-test">
          {coupons?.map((c) => (
            <CustomerCouponItem key={c.id} coupon={c} />
          ))}
        </div>
      ) : (
        <>
          <h2>You have no coupons, go purchase some</h2>
          <>
            <iframe
              src="https://giphy.com/embed/NFbjUcDsjUUms"
              width="480"
              height="250"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <CustomLink to="/coupons">purchase now!!</CustomLink>
            </p>
          </>
        </>
      )}
    </div>
  );
}

export default CustomerCouponList;
