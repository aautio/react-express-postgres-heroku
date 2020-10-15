import React, {Component} from "react";
import "./Title.css";

export default class Title extends Component {
    render() {
      return (
        <div>   
            <p className="Title-Style">{this.props.name}</p>
        </div>
      );
    }
  }
