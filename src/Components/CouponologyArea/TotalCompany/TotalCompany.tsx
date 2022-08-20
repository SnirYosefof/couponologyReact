import { useEffect, useState } from "react";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./TotalCompany.css";

function TotalCompany(): JSX.Element {
    const [num, setNum] = useState(store.getState().companysReducer.companys.length);
    useEffect(() => {
        if (num === 0) {
            web.companyCount()
                .then(res => {
                    setNum(res.data);
                })
                .catch(err => notify.error(err.message));
        }
        return store.subscribe(() => {
            setNum(store.getState().companysReducer.companys.length); 
        });
    }, [num]);
    return (
        <div className="TotalCompany">
			<p>Total company {num}</p>
        </div>
    );
}

export default TotalCompany;
