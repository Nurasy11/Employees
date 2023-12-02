import './employee-add-forms.css'



const EmployeeAddForms = () => {
    return (
        <div className="app-add-form">
            <h3>Қызметкерді қосу</h3>
            <form className="add-form d-flex">
                <input type="text"
                className="form-control new-post-label"
                placeholder="Аты-жөні" />
                <input type="number"
                className="form-control new-post-label"
                placeholder="З/П" />

                <button type="submit" className="btn btn-outline-light">Қосу</button>
            </form>
        </div>
    )
}

export default EmployeeAddForms
