import React from "react";

import Footer from "./Footer";
import FilterableProductTable from "./FilterableProductTable";
import Header from "./Header";

export default class Layout extends React.Component {

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
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <FilterableProductTable products={this.props.products}/>
        <Footer />
      </div>
    )
  }
}
