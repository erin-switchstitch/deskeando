import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Header = (props)=> {
    return (
        <div className="headerContainer">
            <h1 className="headerTitle" >Deskendo</h1>
            <h2 className="headerSubtitle"> Flexible desk booking, with Deskendo you can manage your hybrid workspace </h2>

            
        
            <Link to={'/'}>
                <button>(login)</button>
            </Link>
            <Link to={'/dashboard'}>
                <button>Dashboard</button>
            </Link>
            <Link to={'/booking'}>
                <button>Make A Booking</button>
            </Link>
            <Link to={'/about'}>
                <button>About</button>
            </Link>  

        
        </div>
    );
};

export default Header;