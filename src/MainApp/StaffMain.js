import React from 'react';
import '../App.css'
import StaffUpdateAvailability from "./StaffUpdateAvailability";
import StaffMarkOrdersComplete from "./StaffMarkOrdersComplete";

class StaffMain extends React.Component{

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <StaffUpdateAvailability />
                <br />
                <br />
                <StaffMarkOrdersComplete />
            </div>
        );
    }
}

export default StaffMain;
