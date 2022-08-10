import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Menu from "../Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header flex-between font">
			<h1 >couponology</h1>
            <Menu/>
            <AuthMenu/>
        </div>
    );
}

export default Header;
