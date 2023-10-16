
import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

function App() {
    const responseMessage = (response) => {
        console.log(response);
        const {code} = response;
        axios.post("/api/create-tokens", {code})
        .then((response) => {
            console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
        })
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
      <GoogleOAuthProvider
      clientId="56473341549-hhvu8bpfou3bal9lim6su9090bapk6fd.apps.googleusercontent.com"
      cookiePolicy={'single_host_origin'}
      responseType='code'
      accessType='offline'
      scope ='openid email profile https://www.googleapis.com/auth/calendar'
      // Other configuration options
  >

    
      <div>
          <h2>React Google Login</h2>
          <br />
          <br />
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage}       
      cookiePolicy={'single_host_origin'}
      responseType='code'
      accessType='offline'
      scope ='openid email profile https://www.googleapis.com/auth/calendar'/>
      </div>















  </GoogleOAuthProvider>
);
}
export default App;
