import React, {Component} from "react";
import "./Title.css";

export default class Title extends Component {
    render() {
      return (
        <div>   
            <h1 className="Title-Style">{this.props.name}</h1>
        </div>
      );
    }
  }
