import React from 'react';
import Navbar from './../../Shared/Navbar/Navbar';
import './Donation.css';
import PageTitle from './../../Shared/PageTitle/PageTitle';

const Donation = () => {
    return (
        <section className='donation_page_section'>
            <PageTitle title={'Donation'} />
            <Navbar />

            <div className="donation_page">
                <div className="donation_page_title">
                    <h1>Total Donation: $200k</h1>
                </div>
            </div>
        </section>
    );
};

export default Donation;