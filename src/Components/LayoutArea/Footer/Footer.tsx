import TotalCoupon from "../../CouponologyArea/TotalCoupon/TotalCoupon";
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex-between">
			<SocialMedia/>
            <h5 >All right reserved &copy; to Snir Yosefof </h5>	
            <TotalCoupon/>
        </div>
    );
}

export default Footer;
