import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './header.css';

import Timer from './timer';

class Header extends React.Component {
  render() {
    return (
        <div className="app-header">
            <span className="timer glyphicon glyphicon-play" aria-hidden="true" />
            <Timer minutes={5} seconds={0} />
        </div>
    );
  }
}

export default Header;
