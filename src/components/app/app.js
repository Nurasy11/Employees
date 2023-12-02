
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForms from '../employee-add-forms/employee-add-forms';
import './app.css';

function App(){

    const data = [
        {name:'Санжар Түлкібаев', salary:'100000', increase:false, id:1},
        {name:'Қуаныш Нәбиев', salary:'2100000', increase:true, id:2},
        {name:'Асқар Болат', salary:'1500000', increase:false, id:3},

    ]

    return (
<div className="app">
    <AppInfo/> 

    <div className="search-panel">
    <SearchPanel/>
    <AppFilter/>
    </div>
    <EmployeeList data={data}/>
    <EmployeeAddForms/>
</div>
    );
}

export default App;