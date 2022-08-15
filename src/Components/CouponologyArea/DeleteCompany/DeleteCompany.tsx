import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { companyssDeletedAction } from "../../Redux/Store/CompanyAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();
    const companyId = +(params.id || 0);
    const [id, setId] = useState<number>(companyId);



    const no = () => {
        navigate("/admin/companys");
      };
      const yes = () => {
        web.deleteCompany(id)
        .then(res => {
            notify.success('woho deleted successfully');
            navigate('/admin/companys');
            store.dispatch(companyssDeletedAction(id))
        })
        .catch(err => {
            notify.error(err);
            navigate('/admin/companys');
        });
      }
      return (
        <div className="DeleteCompany flex-col-center ">
          <h1>Delete task</h1>
          <h3>Are you sure you want to delete task #{id}?</h3>
          <div className="flex-row box"> 
            <button className="button-danger" onClick={yes}>yes</button>
            <button className="button" onClick={no}>no</button>
          </div>
        </div>
    );
}
export default DeleteCompany;
