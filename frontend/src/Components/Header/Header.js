import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className='header_component_full_section'>
            <div className="header_component_container">
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>

                <div className="header_component_input_wrap">
                    <input type="text" placeholder='Search......' />
                    <button>Search</button>
                </div>
            </div>
        </section>
    );
};

export default Header;