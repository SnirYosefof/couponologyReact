import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { customerDeletedActoin } from "../../Redux/Store/CustomerAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./DeleteCustomer.css";

function DeleteCustomer(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const customerId = +(params.id || 0);
  const [id, setId] = useState<number>(customerId);

  const no = () => {
    navigate("/admin/customers");
  };
  const yes = () => {
    web
      .deleteCustomer(id)
      .then((res) => {
        notify.success("woho deleted successfully");
        navigate("/admin/customers");
        store.dispatch(customerDeletedActoin(id));
      })
      .catch((err) => {
        notify.error(err.message);
        navigate("/admin/customers");
      });
  };
  return (
    <div className="DeleteCompany flex-col-center font2 ">
      <h1>Delete task</h1>
      <h3>Are you sure you want to delete task #{id}?</h3>
      <div className="flex-row box">
        <button className="button-danger" onClick={yes}>
          yes
        </button>
        <button className="button" onClick={no}>
          no
        </button>
      </div>
    </div>
  );
}
export default DeleteCustomer;
