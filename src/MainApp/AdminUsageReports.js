import React from 'react';
import '../App.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
const client = require('../Utilities/client');

class AdminUsageReports extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            names: [
            ],
            selectionRange: {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            },
            revenueString: ""
        }
    }

    handleSelect = (ranges) => {
        let selection = this.state.selectionRange;
        selection.startDate = ranges.selection.startDate;
        selection.endDate = ranges.selection.endDate;
        this.setState({selectionRange: selection});
        this.getRevenueOverRange();
    };

    getAllOngoingOrders = () => {
        client.get('/api/order/all', {})
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
                        "createdAt": response.data[i].createdAt,
                        "_id": response.data[i]._id
                    };
                    tempNames.push(newOrder)
                }
                this.setState({names: tempNames});
                this.getFirstDate();
                this.getRevenueOverRange();
            })
            .catch((error) => {
                alert(error)
            });
    };

    getBeginningOfDay = (date) => {
      date.setHours(0,0,0,0);
      return date;
    };

    getFirstDate = () => {
        let lowestDate = new Date();
        for(let i=0; i<this.state.names.length; i++) {
            if(new Date(this.state.names[i].createdAt).getTime() < lowestDate.getTime()) {
                lowestDate = new Date(this.state.names[i].createdAt);
            }
        }
        let selectionRange = this.state.selectionRange;
        selectionRange.startDate = lowestDate;
        this.setState({selectionRange: selectionRange})
    };

    getRevenueOverRange = () => {
      let filteredOrders = this.state.names.filter(item => this.getBeginningOfDay(new Date(item.createdAt)).getTime() <=
          this.state.selectionRange.endDate && this.getBeginningOfDay(new Date(item.createdAt)).getTime() >= this.state.selectionRange.startDate);
      let totalRevenue = 0;
      console.log(this.state.selectionRange.startDate);
      console.log(this.state.selectionRange.endDate);
      for(let i=0; i<filteredOrders.length; i++) {
          totalRevenue += parseInt(filteredOrders[i].cost, 10)
      }
      this.setState({revenueString: "Total revenue between " + this.state.selectionRange.startDate.toDateString()
              + " and " + this.state.selectionRange.endDate.toDateString() + " was $" + totalRevenue})
    };

    componentDidMount() {
        this.getAllOngoingOrders();
    }

    render () {

        return (
            <div>
                <h1>Show Usage Report Over Date Range</h1>
                <DateRangePicker
                    ranges={[this.state.selectionRange]}
                    onChange={this.handleSelect}
                />
                <h4>{this.state.revenueString}</h4>
            </div>
        );
    }
}

export default AdminUsageReports;
