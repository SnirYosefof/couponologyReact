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
import CustomersItem from "../CustomerItem/CustomerItem";
import TotalCustomer from "../TotalCustomer/TotalCustomer";
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
        notify.error(err);
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
        {customers?.map((c) => (
          <CustomersItem key={c.id} customers={c} />
        ))}
      </Table>
      <TotalCustomer/>
    </div>
  );
}
export default CustomersList;
