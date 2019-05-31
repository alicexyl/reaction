import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';

const MessageReactions = ({ messageReactions }) => {
    if (!messageReactions) return null;

    return (
        messageReactions.map((reaction, index) => {
            const {id, emoji, username } = reaction;

            return (
                <span key={id}>
                    <em>{username}:</em> {emoji}
                    { index != messageReactions.length - 1 ? ', ': null}
                </span>
            )
        })
    )
}

const Message = ({ item: { text, timestamp, username, id }, reactions }) => (
    <div>
        <h4>{new Date(timestamp).toLocaleString()}</h4>
        <p>{text}</p>
        <h4>- {username}</h4>
        <CreateReaction messageId={id} />
        <MessageReactions messageReactions={reactions} />
        <hr />
    </div>
)

const MessageBoard = ({ messages: { items }, reactions }) => {
    return (
        <div>
            { items.map(item => <Message key={item.id} item={item} reactions={reactions[item.id]} />) }
        </div>
    );
}

export default connect(
    ({ messages, reactions }) => ({ messages, reactions })
)(MessageBoard);
