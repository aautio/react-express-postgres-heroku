import React, {Component} from "react";
import logo from '../logo.svg'
import "./Header.css"

export default class Header extends Component {
    render() {
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
      );
    }
  }
