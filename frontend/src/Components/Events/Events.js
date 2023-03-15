import React from 'react';
import './Events.css';
import useEvents from './../../Hooks/useEvents';
import Event from '../Event/Event';
import Loader from './../../Shared/Loader/Loader';

const Events = () => {
    const { events } = useEvents();
    return (
        <section>
            {
                !events.length ?
                    <Loader />
                    :
                    <section className='events_section'>
                        {
                            events?.map((event, index) => <Event
                                key={index}
                                event={event}
                            />)
                        }
                    </section>
            }
        </section>
    );
};

export default Events;