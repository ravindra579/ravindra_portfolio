import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
    </div>
  );
}

export default Home;
