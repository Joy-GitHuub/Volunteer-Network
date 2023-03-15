import React from 'react';
import Loader from '../../Shared/Loader/Loader';
import VolunteerCard from '../VolunteerCard/VolunteerCard';
import useAuth from './../../Hooks/useAuth';
import useMyEvents from './../../Hooks/useMyEvents';
import './AllMyEvents.css'

const AllMyEvents = () => {
    const { firebase } = useAuth();
    const { user } = firebase;
    const { myEvents } = useMyEvents(user?.email);

    return (
        <section className='full_volunteer_section_container'>
            {!myEvents.length ?
                <Loader />
                :
                <section className='volunteer_card_section_wrap'>
                    {
                        myEvents.map((event, index) => <VolunteerCard key={index} event={event} />)
                    }
                </section>
            }
        </section>
    );
};

export default AllMyEvents;