import { useNavigate } from "react-router-dom";
import "./CompanyAbility.css";

function CompanyAbility(): JSX.Element {

    const navigate = useNavigate();


    const click = async () => {
     navigate("/company/coupons")
    
        } 

    return (
        <div className="CompanyAbility flex-center">
             <button className="button-options " onClick={click} > Coupons </button>

        </div>
    );
}

export default CompanyAbility;
