import React from 'react';
import '../App.css'
const client = require('../Utilities/client');

class StaffUpdateAvailability extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            formFields: {name: '', price: '', imageURL: '', available: true},
            names: [
            ]
        }
    }

    inputChangeHandler = (e) => {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
    };

    getAllMenuItems = () => {
        client.get('/api/menuItem/', {})
            .then((response) => {
                let tempNames = [];
                for(let i=0; i<response.data.length; i++) {
                    let newFood = {
                        "name": response.data[i].name,
                        "price": response.data[i].price,
                        "imageURL": response.data[i].imageURL,
                        "available": response.data[i].available,
                        "_id": response.data[i]._id
                    };
                    tempNames.push(newFood)
                }
                this.setState({names: tempNames})
            })
            .catch((error) => {
                alert(error.response.data.message || 'Error getting menu items')
            });
    };

    componentDidMount() {
        this.getAllMenuItems();
    }

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

    updateItemAvailability = (item, e) => {
        client.post('/api/menuItem/availability', {name: item.name, available: !item.available})
            .then(() => {
                let namesState = this.state.names;
                for(let i=0; i<namesState.length; i++) {
                    if(item.name === namesState[i].name) {
                        namesState[i].available = !namesState[i].available
                    }
                }
                this.setState({names: namesState});
                alert("Availability of menu item successfully changed")
            })
            .catch(error => {
                alert(error)
                e.preventDefault();
            });
    };


    render () {
        return (
            <div>
                <h1>Update Menu Item Availability</h1>
                {this.state.names.map((item, i) => {
                    return (
                        <div>
                            <table style={{"width": "100%"}}>
                                <tbody>
                                <tr key={i}>
                                    <td style={{"width": "33%"}}>{item.name}</td>
                                    <td style={{"width": "33%"}}><input type="radio" value="yes" checked={item.available} name={"availability" + i} onClick={(e) => this.updateItemAvailability(item, e)} /> Available</td>
                                    <td style={{"width": "33%"}}><input type="radio" value="no" checked={!item.available} name={"availability" + i} onClick={(e) => this.updateItemAvailability(item, e)} /> Unavailable</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default StaffUpdateAvailability;
