import { Table } from "react-bootstrap";
import { CompanyModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
import { MdDelete, MdModeEdit } from "react-icons/md";

import "./CompanyItem.css";
import { BsPlusSquare } from "react-icons/bs";
interface CompanyItemProps {
    company:CompanyModel
}
function CompanyItem(props: CompanyItemProps): JSX.Element {
    return (
        <tbody className="font2">
          <tr>
            <td>{props.company.id}</td>
            <td>{props.company.name}</td>
            <td>{props.company.email}</td>
            <td>{props.company.password}</td>
            <td> <CustomLink to={`deleteCompany/${props.company.id}`}><MdDelete size={42} /></CustomLink></td>
            <td> <CustomLink to={`/updateCompany/${props.company.id}`}><MdModeEdit size={42} /></CustomLink></td>
          </tr>
        </tbody>
    );
}

export default CompanyItem;
