import React from 'react';
import '../App.css'
const client = require('../Utilities/client');

class AdminAddItem extends React.Component{

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
                <h1>Add New Item To Menu</h1>
                <form onSubmit={(e) => this.formHandler(e, this.state.formFields)}>
                    <input name={"name"} id={"name"} type={"text"} placeholder={"New Item Name"} onChange={this.inputChangeHandler}/>
                    <input name={"price"} id={"price"} type={"text"} placeholder={"New Item Price"} onChange={this.inputChangeHandler}/>
                    <input name={"imageURL"} id={"imageURL"} type={"text"} placeholder={"New Item Image URL"} onChange={this.inputChangeHandler}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AdminAddItem;
