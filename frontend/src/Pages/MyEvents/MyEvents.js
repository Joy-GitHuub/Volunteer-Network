import React from 'react';
import AllMyEvents from '../../Components/AllMyEvents/AllMyEvents';
import Navbar from '../../Shared/Navbar/Navbar';
import PageTitle from './../../Shared/PageTitle/PageTitle';

const MyEvents = () => {
    return (
        <section>
            <Navbar />
            <PageTitle title={'My-Events'} />
            <AllMyEvents />
        </section>
    );
};

export default MyEvents;