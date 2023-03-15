import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegisterEvent.css';
import logo from '../../Images/Group 1329.png';
import useAuth from './../../Hooks/useAuth';

const RegisterEvent = () => {
    const { eventId } = useParams();
    const { firebase } = useAuth();
    const { user } = firebase;

    const navigate = useNavigate();


    const [event, setEvent] = React.useState({});
    const [date, setDate] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleFetchEvent = async (id) => {
        const url = `https://volunteer-network-henna.vercel.app/singleEvent/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.statusbar) {
            setEvent(data.data);
        } else {
            console.log(data);
        }
    };

    React.useEffect(() => {
        handleFetchEvent(eventId)
    }, [eventId]);

    const handleFetchRegister = async (volunteerInfo) => {
        const url = `https://volunteer-network-henna.vercel.app/volunteer`;
        const res = await fetch(url, {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(volunteerInfo),
        });
        const data = await res.json();
        return data;
    };

    const dateA = new Date();

    console.log(event);
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const selectDate = date;
        const volunteerDescription = description;
        const title = event.title;
        const image = event.image;
        const volunteerInfo = { name, email, selectDate, volunteerDescription, title, image };
        if ((dateA <= new Date(selectDate)) || (dateA.toDateString() === new Date(selectDate).toDateString())) {
            const data = await handleFetchRegister(volunteerInfo);
            if (data.statusbar) {
                alert(`SuccessFully Create Your Volunteer...`);
                navigate('/')
            } else {
                console.log(data);
            }
        } else {
            alert(`Select Wrong Date....`)
        }
    };


    return (
        <section className='event_details_section'>
            <div className="register_page_logo_wrap">
                <img src={logo} alt="" />
            </div>
            <div className="event_details_page_container">
                <div className="volunteer_register_title">
                    <h3>Volunteer Register</h3>
                </div>
                <form className="form" onSubmit={handleRegister}>
                    <input type="text" placeholder="Full Name" defaultValue={user?.displayName} required /><br />
                    <input type="email" placeholder="Email" defaultValue={user?.email} required /><br />
                    <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Select Your Date...." required /><br />
                    <input type="text" placeholder="Event Title" defaultValue={event.title} required /><br />
                    <input onBlur={(e) => setDescription(e.target.value)} type="text" placeholder="Description" required /><br />
                    <button type="submit" className="btn btn-primary w-100 btn-md mt-3">Registration</button>
                </form>
            </div>
        </section>
    );
};

export default RegisterEvent;