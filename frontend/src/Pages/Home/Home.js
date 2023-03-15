import React from 'react';
import Events from '../../Components/Events/Events';
import Header from '../../Components/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Home.css';

const Home = () => {
    return (
        <div className='home_page_section'>
            <PageTitle title="Home"></PageTitle>
            <Navbar />
            <Header />
            <Events />
        </div>
    );
};

export default Home;