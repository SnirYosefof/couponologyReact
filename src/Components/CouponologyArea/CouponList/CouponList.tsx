import { SetStateAction, useEffect, useState } from "react";
import { CouponCategory } from "../../Models/CouponCategory";
import { CouponModel } from "../../Models/UserModel";
import { couponsDownloadedAction } from "../../Redux/Store/CouponAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import CouponItem from "../CouponItem/CouponItem";
import "./CouponList.css";

function CouponList(): JSX.Element {
  const [origin, setOrigin] = useState<CouponModel[]>([]);
  const [coupons, setCoupons] = useState<CouponModel[]>([]);


  const handleChange = (category: string) => {
    if (category !== 'All') {
        setCoupons(origin.filter(c => c.category === category));
    } else {
        setCoupons(origin)
    }
} 
 const handleChange2 = (title: string) => {
    if (title !== "") {
        setCoupons(origin.filter(c => c.title === title));
    } else {
        setCoupons(origin)
    }
}
  useEffect(() => {
    web
      .getAllCoupons()
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
    <div className="CouponList flex-col-center font">
      <h1 className="">Coupons list</h1>
      <div className="flex-center">
      <input className="font-size2" type="text" placeholder="Search one coupon.." name="search" onChange={(e) => handleChange2(e.target.value)}></input>
      <select defaultValue={'All'} onChange={(e) => handleChange(e.target.value)}>
        CouponCategory
        <option value="" disabled={true}>
          CouponCategory
        </option>
        <option value="All">All </option>
        <option value="ELECTRONICS">{CouponCategory.ELECTRONICS}</option>
        <option value="FOOD">{CouponCategory.FOOD}</option>
        <option value="SHOW">{CouponCategory.SHOW}</option>
        <option value="VACATIONS">{CouponCategory.VACATIONS}</option>
      </select>
      </div>
     
      
   

      <div className="flex-row-none-wrap-list cards-lists-test">
        {coupons?.map((c) => (
          <CouponItem key={c.id} coupon={c} />
        ))}
      </div>

      <iframe
        src="https://giphy.com/embed/SWVF41fAxIrwIyUr8b"
        width="480"
        height="100"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p></p>
    </div>
  );
}

export default CouponList;
