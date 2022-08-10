import { useNavigate } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import CompanyList from "../../CouponologyArea/CompanyList/CompanyList";
import { ClientType } from "../../Models/ClientType";
import { LoginModel, LoginReqModel } from "../../Models/WelcomeModel";
import store from "../../Redux/Store/Store";
import "./AdminAbility.css";

function AdminAbility(): JSX.Element {
  const navigate = useNavigate();

  const click = async () => {
    if (store.getState().loginReducer.user?.clientType?.match("ADMINISTRATOR")){
      return navigate("/admin/companys");
    }
    navigate("/ops");    
  };
  const click2 = async () => {
    if (store.getState().loginReducer.user?.clientType?.match("ADMINISTRATOR")){
      return navigate("/admin/customers");
    }
    navigate("/ops");
  };

  return (
    <div className="AdminAbility flex-center ">
      <button className="button-options " onClick={click}>
        {" "}
        Company{" "}
      </button>

      <button className="button-options " onClick={click2}>
        {" "}
        Customer{" "}
      </button>
    </div>
  );
}

export default AdminAbility;
