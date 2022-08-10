import TotalCoupon from "../../CouponologyArea/TotalCoupon/TotalCoupon";
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex-between font ">
			<SocialMedia/>
            <h4>All right reserved &copy; to Snir Yosefof </h4>	
            <TotalCoupon/>
        </div>
    );
}

export default Footer;
