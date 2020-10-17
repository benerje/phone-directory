// DONE 1: Created 'Header' as a functional component to display the heading text. Wrote necessary import statement(s) too.
import React from 'react';
import './Header.css'


const Header = function(props) {
    
    return (
        <div className="header">
            {props.heading}
        </div>
    );
}

export default Header;