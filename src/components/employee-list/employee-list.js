import EmployeeListItem from "../employee-list-item/employee-list-item"
import './employee-list.css';

const EmployeeList = ({data}) =>{

    const elements=data.map(item =>{
        return (
            // <EmployeeListItem name={item.name} salary={item.salary} />
            <EmployeeListItem {...item} />

        )
    })

    return (
        <ul className="app-list list-group">
      {elements}
        </ul>
    )
}

export default EmployeeList;