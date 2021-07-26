const EmployeeInfo = [{
    key: 1,
    name: "Nick Pettit",
    email: "nick@example.com",
    jobtitle: "Web Designer"
},
{
    key: 2,
    name: "Andrew Chalkley",
    email: "andrew@example.com",
    jobtitle: "Front-End Developer"
    },
    {
        key: 3,
        name: "Dave McFarland",
        email: "dave@example.com",
        jobtitle: "Front-End Developer"
    },
    {
        key: 4,
        name: "Guil Hernandez",
        email: "guil@example.com",
        jobtitle: "Web Designer"
    },]

function Table(data)
{
    return <tbody><TableBody
        key={data.key}
        name={data.name}
        email={data.email}
        jobtitle={data.jobtitle}
        /></tbody>
}
function TableHead() {
    return     <thead>
    <tr>
        <th scope="col">Name</th>
       <th scope="col">E-mail</th>
       <th scope="col">Job role</th>
     </tr>
   </thead>
}

function TableBody(props) { 
       return <tr>
          <th scope="row">{props.name}</th>
          <td>{props.email}</td>
          <td>{props.jobtitle}</td>
        </tr>
}

function TableFoot() {
    return     <tfoot>
    <tr>
      <td colSpan="3">Data is updated every 15 minutes.</td>
    </tr>
      </tfoot>
}

function Employee() {
    return EmployeeInfo.map(Table)
}

function FinalTable() {
    return     <table>
    <caption>Employee Information</caption>
    <TableHead />

        <Employee />
    <TableFoot />
  </table>
}


ReactDOM.render(<FinalTable />, document.getElementById("root"))