import './app-filter.css';


const AppFilter = () =>{
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Барлық қызметкерлер
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Сыйақы алатындар
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Жалақысы 200000-нан көптер
            </button>

        </div>
    );
}

export default AppFilter;