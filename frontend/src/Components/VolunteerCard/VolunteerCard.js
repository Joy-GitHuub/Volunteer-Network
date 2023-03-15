import React from 'react';
import './VolunteerCard.css';

const VolunteerCard = ({ event }) => {
    console.log(event);
    return (
        <section className='volunteer_card_wrap'>
            <div className="full_card_wrap">
                <div className="full_card_info_wrap">
                    <div className="myEvent_image_wrap">
                        <img src={event.image} alt="" />
                    </div>

                    <div className="myEvent_info_wrap">
                        <h4>{event.title}</h4>
                        <h4>{event.selectDate}</h4>
                    </div>
                </div>
                <div className="delete_event_wrap">
                    <button>Cancel</button>
                </div>
            </div>
        </section>
    );
};

export default VolunteerCard;