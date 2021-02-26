import React from 'react';
import '../App.css'
import StaffUpdateAvailability from "./StaffUpdateAvailability";

class StaffMain extends React.Component{

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <StaffUpdateAvailability />
            </div>
        );
    }
}

export default StaffMain;
