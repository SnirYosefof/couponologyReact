import CustomersList from "../../CouponologyArea/CustomersList/CustomersList";
import "./CustomersInformtion.css";

function CustomersInformtion(): JSX.Element {
    return (
        <div className="CustomersInformtion flex-center">
			<CustomersList />
        </div>
    );
}

export default CustomersInformtion;
