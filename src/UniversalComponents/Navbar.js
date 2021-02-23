import React from 'react';
import '../App.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid" style={{paddingBottom:5}}>
                    <a className="navbar-brand"><img src={'/img/logo.png'} style={{width: 160, height: 80, cursor: 'pointer'}} onClick={() => {}}/></a>
                    <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ml-auto" href="/menu">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/order">Order</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
