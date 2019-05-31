import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers';
import PubSub, { PubSubContext } from './pubsub';
import App from './components/App';
import './index.css';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const { message, channel } = messageObject;

        store.dispatch(message);
    }
});

ReactDOM.render(
    <Provider store={store}>
        <PubSubContext.Provider value={{ pubsub }}>
            <App />
        </PubSubContext.Provider>
    </Provider>, 
    document.getElementById('root'));
