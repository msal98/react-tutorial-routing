import React from "react";

import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

export default class MyLayout extends React.Component {

  render() {
    return (
      <div>
        <MyHeader />
        <MyFooter />
      </div>
    )
  }
}
