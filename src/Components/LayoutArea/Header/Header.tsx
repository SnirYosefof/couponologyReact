import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Menu from "../Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header flex-between font font-size">
			<div >Couponology</div>
            <Menu/>
            <AuthMenu/>
        </div>
    );
}

export default Header;
