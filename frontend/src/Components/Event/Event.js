import React from 'react';
import './Event.css';
import useColor from './../../Hooks/useColor';
import { useNavigate } from 'react-router-dom';

const Event = ({ event }) => {

    /*     const bg = [
            "orange",
            "orange2",
            "blue",
            "blue2",
            "green",
            "green2",
            "brown",
            "brown2",
        ];
        const randomBg = bg[Math.floor(Math.random() * 8)];
        const [color, setColor] = React.useState("")
        const colors = (Math.random().toString(16).substr(-6)); */
    const { color } = useColor(event);

    const navigate = useNavigate();
    const handleEvent = (id) => {
        navigate(`/event/${id}`)
    }

    return (
        <section onClick={() => handleEvent(event._id)} style={{ backgroundColor: `#${color}` }} className={`event_container`}
        >
            <div className="event_image_wrap">
                <img src={event.image} alt="" />
            </div>
            <h3>{event.title}</h3>
        </section>
    );
};

export default Event;