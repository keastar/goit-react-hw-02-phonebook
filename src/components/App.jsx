import { Component } from "react";
import Form from "./Form";

class App extends Component {
  formSubmitHandler = data => {

  }
  render() {
    return (
      <Form onSubmit={this.formSubmitHandler} />
    )
  }
}

export default App;