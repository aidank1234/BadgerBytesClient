import React from 'react';
import '../App.css'
import AdminAddItem from "./AdminAddItem";
import AdminUsageReports from "./AdminUsageReports";

class AdminMain extends React.Component{

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <AdminAddItem />
                <br />
                <br />
                <AdminUsageReports />
            </div>
        );
    }
}

export default AdminMain;
