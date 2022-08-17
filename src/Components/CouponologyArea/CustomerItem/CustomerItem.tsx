
import { Table } from "react-bootstrap";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { CustomerModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
interface CustomersItemProps{
    customers: CustomerModel
}
function CustomersItem(props: CustomersItemProps): JSX.Element {
    return (
        <tbody>
          <tr>
            <td>{props.customers.id}</td>
            <td>{props.customers.firstName}</td>
            <td>{props.customers.lastName}</td>
            <td>{props.customers.email}</td>
            <td>{props.customers.password}</td>
            <td> <CustomLink to={`deleteCustomer/${props.customers.id}`}><MdDelete size={42} /></CustomLink></td>
            <td> <CustomLink to={`/updateCustomer/${props.customers.id}`}><MdModeEdit size={42} /></CustomLink></td>
          </tr>
        </tbody>
    );
}

export default CustomersItem;