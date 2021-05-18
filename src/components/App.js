import React from 'react';
import Token from '../api/tokenGen';
import ChatBot from './ChatBot';

class App extends React.Component {
  state = { token: '', chatClicked: false };

  componentDidMount() {
    this.onStart();
  }

  onStart = async () => {
    const response = await Token.get('/api/tokens', {});
    this.setState({
      token: response.data
    });
  };

  onClickOpen = () => {
    this.setState({ chatClicked: true });
  }

  onClickClose = () => {
    this.setState({ chatClicked: false });
  }

  render() {
    const containerStyle = {
      display: 'flex',
      'flex-direction': 'column',
      'vertical-align': 'middle',
      position: 'absolute',
      bottom: '0px',
      right: '0px',
     };
    
    const closeStyle = {
      'padding-bottom': '5px',
    };

    const closeIconStyle = {
      background: '#da5050',
      width: '30px',
      height: '30px',
      'border-radius': '50%',
      'padding-top': '6px',
      color: 'white',
      cursor: 'pointer',
      'font-size': '20px',
    };

    const popupStyle = {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      background: '#2e90d1',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      paddingTop: '20px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '40px',
    };

    return (
      <div id="chatbot-container" style={containerStyle}>
        <div id="chatbot-close" style={closeStyle}>
          {this.state.chatClicked? <i class="close icon" style={closeIconStyle} onClick={this.onClickClose}></i>: null}
        </div>
        <div>
          {this.state.chatClicked? <ChatBot token={this.state.token} />: null}
        </div>
        <div id="chatbot-button">
          { this.state.chatClicked? null : <i class="comments outline icon" style={popupStyle} onClick={this.onClickOpen} ></i>  }
        </div>
      </div>
    );
  }
}

export default App;
