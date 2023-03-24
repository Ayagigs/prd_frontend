import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,  useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from 'react-toastify';

const Datatable = () => {
  const [data, setData] = useState([]);

  const url = `https://pms-jq9o.onrender.com/api/v1/employee/employees/${Cookies.get('companyID')}`
  
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setData(res.data.data)
    })
  }, []);
  
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));

    const url2 = `https://pms-jq9o.onrender.com/api/v1/admin/deactivate/${id}`

    axios.patch(url2, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      console.log(data)
      toast.success('Employee Account Deactivated');
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }).catch (error => {
      toast.error(error.response.data.message);
  })
  };

  const handleArchive = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="archiveButton"
              onClick={() => handleArchive(params.row.id)}
            >
              Archive
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employee Status
        <Link to="/employee/trial" className="link">
          Add Employee 
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
