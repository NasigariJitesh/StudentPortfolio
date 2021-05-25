import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Introduction from "../../containers/introduction/Introduction";
import Skills from "../../containers/skills/Skills";
import Interests from "../../containers/interests/Interests";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header getTheme={this.props.getTheme} theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Introduction theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Interests theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
