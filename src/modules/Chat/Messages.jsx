import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Messages = props => (
  <ul className="Messages list-group">
    {props.messages.map((msg, index) =>
      <li key={index} className="list-group-item">
        <span>{msg}</span>
        <button onClick={() => props.onRemoveMessage(index)}>Remove</button>
      </li>
    )}
    <li>
      <input type="text" placeholder="Add message..." value={props.messageToAdd}
             onChange={props.onChangeMessage}/>
      <button onClick={props.onAddMessage}>Add</button>
    </li>
  </ul>
);

Messages.propTypes = {
  messages: PropTypes.instanceOf(List).isRequired,
  messageToAdd: PropTypes.string,
  onAddMessage: PropTypes.func.isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

export default Messages;
