import React from 'react';
import '../App.css'
import AdminAddItem from "./AdminAddItem";

class AdminMain extends React.Component{

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <AdminAddItem />
            </div>
        );
    }
}

export default AdminMain;
