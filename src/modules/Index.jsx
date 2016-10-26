import React, { Component, PropTypes } from 'react';
import { Link, locationShape } from 'react-router';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import classnames from 'classnames';

import ChatStore from '../mobx/modules/ChatStore';

@inject('chat')
@observer
class Index extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: locationShape.isRequired,
    // inject
    chat: PropTypes.instanceOf(ChatStore).isRequired,
  };

  render() {
    const { chat } = this.props;
    return (
      <div id="Index">
        {process.env.NODE_ENV !== 'production' && <DevTools />}
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Reactive
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className={classnames({ active: this.props.location.pathname.includes('/reduxchat') })}>
              <Link to="/reduxchat">Redux Chat</Link>
            </li>
            <li className={classnames({ active: this.props.location.pathname.includes('/mobxchat') })}>
              <Link to="/mobxchat">Mobx Chat</Link>
            </li>
            <li><a>Messages: {chat.messages.size}</a></li>
          </ul>
        </nav>
        <div id="App" className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Index;
