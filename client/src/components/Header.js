import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Header = (props)=> {
    return (
        <div className="headerContainer">
            <h1 className="headerTitle" >Deskendo</h1>
            <h2 className="headerSubtitle"> Flexible desk booking, with Deskendo you can manage your hybrid workspace </h2>

            {/* <Link to={'/login'}>
                <button>login</button>
            </Link>
            <Link to={'/dashboard'}>
                <button>dashboard</button>
            </Link>
            <Link to={'/booking'}>
                <button>booking</button>
            </Link> */}
        
        </div>
    );
};

export default Header;