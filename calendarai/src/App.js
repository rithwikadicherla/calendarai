import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleLogin } from 'react-google-login';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkKbnqFW07LFSXWmdmZhAQRKnh-8slL_U",
  authDomain: "calendarai-10263.firebaseapp.com",
  projectId: "calendarai-10263",
  storageBucket: "calendarai-10263.appspot.com",
  messagingSenderId: "57289669032",
  appId: "1:57289669032:web:1417b55f7a3c525118459d",
  measurementId: "G-YWHN1RYGE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  // State to store the event details
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const responseGoogle = (response) => {
    // Handle the response object, which contains the user's Google information.
    console.log(response);
    const accessToken = response.accessToken;
    const googleId = response.googleId;
    const profileObj = response.profileObj;
    const tokenId = response.tokenId;
    const name = response.profileObj.name;
    const imageUrl = response.profileObj.imageUrl;
    console.log(accessToken);
    console.log(googleId);
    console.log(profileObj);
    console.log(tokenId);
    console.log(name);
    console.log(imageUrl);
  };
  // Function to handle the "Send Calendar Invite" button click
  const handleSendInvite = () => {
    // You can implement the calendar invite logic here
    // For this example, we'll just log the event details
    console.log(`Event Name: ${eventName}`);
    console.log(`Event Description: ${eventDescription}`);
    console.log(`Event Date: ${eventDate}`);
    console.log(`Start Time: ${startTime}`);
    console.log(`End Time: ${endTime}`);
  };

  return (
    <div className="App">
      <h1>Create Calendar Event</h1>
      <div>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div>
      <GoogleLogin
        clientId="56473341549-hhvu8bpfou3bal9lim6su9090bapk6fd.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
      <div>
        <label htmlFor="eventDescription">Event Description:</label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSendInvite}>Send Calendar Invite</button>
      </div>
    </div>
  );
}

export default App;
