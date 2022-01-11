import logo from './logo.svg';
import './App.css';
import TawkTo from "tawkto-react";
import React, { useState, useEffect } from 'react';
import image from "./Assets/one_icon.svg"
import facebook from "./Assets/facebook.png"
import whatsapp from "./Assets/whatsapp.png"
import twitter from "./Assets/twitter.png"
import gmail from "./Assets/gmail.png"
import instagram from "./Assets/instagram.png"


function App() {
  useEffect(() => {
     var propertyId = "61d03e66c82c976b71c453d7";
     var tawkId = "1foan7gok";
    

     var tawk = new TawkTo(propertyId, tawkId);
     
window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onLoad = function(
  
){
    //place your code here
};
    
   }, []); 
  return (
    <div className="content-container">
      <div className="content">

        <img src={image} alt="#" />
        <h3>Minimal Chat</h3>
        <p>
          Open Chat live chat system providing messaging between Us and you{" "}
        </p>
        <button>Visit Website</button>
      </div>

      <div className="flex">
        <div>
          {" "}
          <img src={whatsapp} alt="#" />
        </div>
        <div>
          <img src={twitter} alt="#" />
        </div>
        <div>
          <img src={facebook} alt="#" />
        </div>
        <div>
          {" "}
          <img src={instagram} alt="#" />
        </div>
        <div>
          {" "}
          <img src={gmail} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default App;
