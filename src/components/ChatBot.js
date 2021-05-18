import React from 'react';

const ChatBot = ({ token }) => {
    var src = 'https://webchat.botframework.com/embed/TurnersCarsFAQBot?t=';
    
    const getsrc = () => {
        return (token === '') ? '' : src + token;
    }; 

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