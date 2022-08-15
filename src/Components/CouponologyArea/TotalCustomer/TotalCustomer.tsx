import { useEffect, useState } from "react";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./TotalCustomer.css";

function TotalCustomer(): JSX.Element {
    const [num, setNum] = useState(store.getState().customersReducer.customers.length);
    useEffect(() => {
        if (num === 0) {
            web.customerCount()
                .then(res => {
                    setNum(res.data);
                })
                .catch(err => notify.error(err.message.value));
        }
        return store.subscribe(() => {
            setNum(store.getState().customersReducer.customers.length); 
        });
    }, [num]);
    return (
        <div className="TotalCustomer">
			<p>total customer {num}</p>
        </div>
    );
}

export default TotalCustomer;
