import React from 'react';

const useMyEvents = (userEmail) => {
    const [myEvents, setMyEvents] = React.useState([]);

    const handleVolunteerFetch = async (email) => {
        const url = `https://volunteer-network-henna.vercel.app/myVolunteer/${email}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.statusbar) {
            setMyEvents(data.data);
        }
    };

    React.useEffect(() => {
        handleVolunteerFetch(userEmail);
    }, [userEmail]);

    return { myEvents };
};

export default useMyEvents;