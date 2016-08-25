import React from "react";

import MyTitle from "./MyHeader/MyTitle";

export default class MyHeader extends React.Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <MyTitle title={this.props.title}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}
