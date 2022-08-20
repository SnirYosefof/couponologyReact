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
  const [origin, setOrigin] = useState<CustomerModel[]>([]);
  const [customers, setCustomers] = useState<CustomerModel[]>([]);


  const handleChange = (firstName: string) => {
    if (firstName !== "") {
        setCustomers(origin.filter(c => c.firstName === firstName));
    } else {
        setCustomers(origin)
    }
}
  useEffect(() => {
    web
      .getAllCustomer()
      .then((res) => {
        notify.success("whoho!");
        setCustomers(res.data);
        setOrigin(res.data)
        store.dispatch(customersDownloadedAction(res.data));
      })
      .catch((err) => {
        notify.error(err);
      });
  }, []);
  return (
    <div className="CustomersList flex-col-center font">
      <h1>Customers list</h1>
      <div className="flex-center">
      <input className="font-size2" type="text" placeholder="Search one customer.." name="search" onChange={(e) => handleChange(e.target.value)}></input>
      </div>
      <CustomLink to="/admin/addCustomer">
        Add customer-
        <BsPlusSquare size={42} />
      </CustomLink>
      <Table striped bordered hover >
        <thead className=" font" >
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
