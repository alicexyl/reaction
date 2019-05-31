import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACTION_OBJECTS } from '../actions/types';
import { PubSubContext } from '../pubsub';
import { createReaction } from '../actions/reactions';

class CreateReaction extends Component {
    publicReaction = ({ type, emoji }) => () => {
        const { username, messageId } = this.props;
        this.context.pubsub.publish(createReaction({ type, emoji, username, messageId }))
    }

    render() {
        return (
            <div>
                {
                    REACTION_OBJECTS.map(REACTION_OBJECT => {
                        const { type, emoji } = REACTION_OBJECT;

                        return (
                            <span key={type} onClick={this.publicReaction({ type, emoji })} style={
                                {
                                    margin: 5,
                                    cursor: 'pointer'
                                }
                            }>
                                {emoji}
                            </span>
                        );
                    })
                }
            </div>
        );
    }

    static contextType = PubSubContext;
}

export default connect(
    ({ username }) => ({ username })
)(CreateReaction);
