import React, { Component } from 'react';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import Username from './Username';

class App extends Component {
   render() {
        return (
            <div>
                <h2>Reaction</h2>
                <Username />
                <hr />
                <PublishMessage />
                <hr />
                <MessageBoard />
            </div>
        );
    }
}

export default App;
