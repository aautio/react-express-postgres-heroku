import React, { Component, Fragment } from "react";
import Title from "../Title"

class Page2 extends Component {
  
  // do some api calls and querying here.
  render() {
    return (
      <Fragment>
        <Title name={this.props.name}/>
      </Fragment>
    );
  }
}
export default Page2;

