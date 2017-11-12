import * as React from 'react';
import './header.css';

import Timer from './timer';
interface HeaderState {
  started: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = { started: false };
  }

  renderButton() {
    const buttonClass = `timer_button glyphicon ${this.state.started ? 'glyphicon-stop' : 'glyphicon-play'}`;

    return (<button className={buttonClass} onClick={() => this.setState({started: !this.state.started})} />);
  }
  render() {
    if (!this.state.started) {
      return (
        <div className="app-header">
            <span className="timer" aria-hidden="true" >
              {this.renderButton()}
            </span>
        </div>
      );
    }

    return (
        <div className="app-header">
            <span className="timer" aria-hidden="true" >
              {this.renderButton()}
              <Timer minutes={5} seconds={0} />
            </span>
        </div>
    );
  }
}

export default Header;
