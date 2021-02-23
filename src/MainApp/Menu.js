import React from 'react';
import '../App.css'
import Navbar from "../UniversalComponents/Navbar";

class Menu extends React.Component{

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <Navbar />
                THIS WILL BE THE PAGE WHERE THE USER CAN VIEW THE MENU
            </div>
        );
    }
}

export default Menu;
