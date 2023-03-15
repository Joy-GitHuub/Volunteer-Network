import React from "react";

const useEvents = () => {

    const [events, setEvents] = React.useState([]);

    const fetchEvents = async () => {
        const url = `https://volunteer-network-henna.vercel.app/events`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.statusbar) {
            setEvents(data.data);
        } else {
            console.log(data);
        }
    };

    React.useEffect(() => {
        setTimeout(() => {
            fetchEvents();
        }, 1000);
    }, []);

    return { events, setEvents }
};

export default useEvents;