import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { CustomerModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
import { customersDownloadedAction } from "../../Redux/Store/CustomerAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import "./CustomersList.css";

function CustomersList(): JSX.Element {
  const [customers, setCustomers] = useState<CustomerModel[]>([]);

  useEffect(() => {
    web
      .getAllCustomer()
      .then((res) => {
        notify.success("whoho!");
        setCustomers(res.data);
        store.dispatch(customersDownloadedAction(res.data));
      })
      .catch((err) => {
        notify.error(err.message);
      });
  }, []);
  return (
    <div className="CustomersList flex-col-center font2">
      <h1>customer list</h1>
      <CustomLink to="/admin/addCustomer">
        <BsPlusSquare size={42} />
      </CustomLink>
      <Table striped bordered hover className=" font2">
        <thead >
            <tr>
          <th>Id</th>
          <th> First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>password</th>
          <th></th>
          <th></th>
          </tr>
        </thead>
        {customers.map((customers, index) => (
          <tbody>
            <tr data-index={index}>
              <td>{customers.id}</td>
              <td>{customers.firstName}</td>
              <td>{customers.lastName}</td>
              <td>{customers.email}</td>
              <td>{customers.password}</td>
              <td>
                {" "}
                <CustomLink to={`deleteCustomer/${customers.id}`}>
                  <MdDelete size={42} />
                </CustomLink>
              </td>
              <td>
                <CustomLink to={`/updateCustomer/${customers.id}`}>
                  <MdModeEdit size={42} />
                </CustomLink>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
export default CustomersList;
