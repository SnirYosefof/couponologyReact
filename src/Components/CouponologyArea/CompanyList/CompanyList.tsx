import axios from "axios";
import { error } from "console";
import { CpuInfo } from "os";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { CompanyModel } from "../../Models/UserModel";
import CustomLink from "../../Redux/CustomLink/CustomLink";
import { companysDownloadedAction } from "../../Redux/Store/CompanyAppState";
import store from "../../Redux/Store/Store";
import notify from "../../Service/Notify";
import web from "../../Service/WebApi";
import CompanyItem from "../CompanyItem/CompanyItem";
import "./CompanyList.css";

function CompanyList(): JSX.Element {
  const [companys, setCompanys] = useState<CompanyModel[]>([]);

  useEffect(() => {
    web
      .getAllCompany()
      .then((res) => {
        notify.success("whoho!");
        setCompanys(res.data);
        store.dispatch(companysDownloadedAction(res.data));
      })
      .catch((err) => {
        notify.error(err.message);
      });
  }, []);

  return (
    <div className="CompanyList flex-col-center font2">
      <h1>company list</h1>
      <CustomLink to="/admin/addCompany">
        <BsPlusSquare size={42} />
      </CustomLink>
      <Table striped bordered hover>
        <thead className="font2">
          <tr>
            <th>Id</th>
            <th> name</th>
            <th>Email</th>
            <th>password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {companys?.map((c) => (
          <CompanyItem key={c.id} company={c} />
        ))}
      </Table>
    </div>
  );
}

export default CompanyList;
