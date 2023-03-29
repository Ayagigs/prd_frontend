export const userColumns = [
  { field: "employeeID", headerName: "Employee ID", width: 150 },
  {
    field: "user",
    headerName: "Employee Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.profilePhoto} alt="avatar" />
          {params.row.firstName + " " + params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "workEmail",
    headerName: "Email",
    width: 230,
  },

  {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

