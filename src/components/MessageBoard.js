import React from 'react';
import { connect } from 'react-redux';

const Message = ({ item: { text, timestamp } }) => (
    <div>
        <h4>{new Date(timestamp).toLocaleString()}</h4>
        <p>{text}</p>
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