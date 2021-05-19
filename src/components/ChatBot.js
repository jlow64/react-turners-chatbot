import React from 'react';

const ChatBot = ({ token }) => {
    // Web Url needed to use the token
    var src = 'https://webchat.botframework.com/embed/TurnersCarsFAQBot?t=';
    
    // If the token is valid, then proceed to use the src + token
    const getsrc = () => {
        return (token === '') ? '' : src + token;
    }; 

    // return the div which contains the embedded bot iframe
    return (
        <div id="chatbot">
            <iframe 
                title='Turners Cars FAQ Chat Bot' 
                id='chat' src={getsrc()} 
                style={{'maxWidth': '300px', 'width': '100%', 'minHeight': '400px'}} >
            </iframe>
        </div>
    );
};

export default ChatBot;