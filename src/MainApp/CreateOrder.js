import React from 'react';
import '../App.css'
import Navbar from "../UniversalComponents/Navbar";

class CreateOrder extends React.Component{

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <Navbar />
                THIS WILL BE THE PAGE WHERE THE USER CAN CREATE THEIR ORDER
            </div>
        );
    }
}

export default CreateOrder;
