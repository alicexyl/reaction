import React from 'react';
import { connect } from 'react-redux';

const Message = ({ item: { text, timestamp, username } }) => (
    <div>
        <h4>{new Date(timestamp).toLocaleString()}</h4>
        <p>{text}</p>
        <h4>- {username}</h4>
        <hr />
    </div>
)

const MessageBoard = ({ messages: { items } }) => {
    console.log('items', items);
    return (
        <div>
            { items.map(item => <Message key={item.id} item={item} />) }
        </div>
    );
}

export default connect(
    ({ messages }) => ({ messages })
)(MessageBoard);