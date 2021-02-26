import React from 'react';
import '../App.css'
const client = require('../Utilities/client');

class StaffMarkOrdersComplete extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            names: [
            ]
        }
    }

    getAllOngoingOrders = () => {
        client.get('/api/order/', {})
            .then((response) => {
                let tempNames = [];
                for(let i=0; i<response.data.length; i++) {
                    let newOrder = {
                        "username": response.data[i].username,
                        "menuItems": response.data[i].menuItems,
                        "cost": response.data[i].cost,
                        "pickUpTime": response.data[i].pickUpTime,
                        "car": response.data[i].car,
                        "highPriority": response.data[i].highPriority,
                        "_id": response.data[i]._id
                    };
                    tempNames.push(newOrder)
                }
                this.setState({names: tempNames})
            })
            .catch((error) => {
                alert(error)
            });
    };

    componentDidMount() {
        this.getAllOngoingOrders();
    }

    markOrderComplete = (order) => {
        client.post('/api/order/complete', {_id: order._id})
            .then(() => {
                let namesState = this.state.names;
                for(let i=0; i<namesState.length; i++) {
                    if(order._id === namesState[i]._id) {
                        namesState = namesState.filter(item => item._id !== namesState[i]._id);
                        break
                    }
                }
                this.setState({names: namesState});
                alert("Order successfully completed")
            })
            .catch(error => {
                alert(error);
            });
    };

    markOrderHighPriority = (order) => {
        client.post('/api/order/priority', {_id: order._id})
            .then(() => {
                let namesState = this.state.names;
                for(let i=0; i<namesState.length; i++) {
                    if(order._id === namesState[i]._id) {
                        namesState[i].highPriority = true;
                        break
                    }
                }
                this.setState({names: namesState});
                alert("Order successfully marked high priority")
            })
            .catch(error => {
                alert(error);
            });
    };


    render () {
        return (
            <div>
                <h1>Ongoing Orders</h1>
                {this.state.names.map((item, i) => {
                    return (
                        <div>
                            <table style={{"width": "100%"}}>
                                <tbody>
                                <tr key={i}>
                                    <td style={{"width": "16.67%"}}>{"Username: " + item.username}</td>
                                    <td style={{"width": "16.67%"}}>{"Items in Order: " + item.menuItems.toString()}</td>
                                    <td style={{"width": "16.67%"}}>{"Total Cost USD: " + item.cost}</td>
                                    <td style={{"width": "16.67%"}}>{"Pick Up Time: " + item.pickUpTime}</td>
                                    <td style={{"width": "16.67%"}}>{"Pick Up Car: " + item.car}</td>
                                    <td style={{"width": "16.67%"}}>{"Is High Priority: " + item.highPriority}</td>
                                    <td style={{"width": "16.67%"}}><button onClick={() => this.markOrderHighPriority(item)}>Mark High Priority</button></td>
                                    <td style={{"width": "16.67%"}}><button onClick={() => this.markOrderComplete(item)}>Complete Order</button></td>
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

export default StaffMarkOrdersComplete;
