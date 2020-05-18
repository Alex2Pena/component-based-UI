import React from "react";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Counter from "./counter/counter.jsx";

import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  };
};

export default App;