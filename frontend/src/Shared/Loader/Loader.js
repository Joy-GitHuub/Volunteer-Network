import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <section className='loader_section'>
            <div className="lds-ripple"><div></div><div></div></div>
        </section>
    );
};

export default Loader;