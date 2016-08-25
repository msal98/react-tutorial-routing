import React from "react";

import MyFooter from "./MyFooter";
import FilterableProductTable from "./FilterableProductTable";
import MyHeader from "./MyHeader";

export default class MyLayout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title})
  }

  render() {
    return (
      <div>
        <MyHeader changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <FilterableProductTable products={this.props.products}/>
        <MyFooter />
      </div>
    )
  }
}
