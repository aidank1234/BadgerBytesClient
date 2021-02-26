import React from 'react';
import '../App.css'
const client = require('../Utilities/client');

class AdminUsageReports extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            formFields: {name: '', price: '', imageURL: '', available: true}
        }
    }

    inputChangeHandler = (e) => {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
    };

    formHandler = (e, formFields) => {
        e.preventDefault();

        client.post('/api/menuItem/', formFields)
            .then(function(response){
                alert("Menu item has been successfully added to database")
            })
            .catch(error => {
                alert("Failed to add menu item to database")
            });
    };


    render () {
        return (
            <div>
            </div>
        );
    }
}

export default AdminUsageReports;
