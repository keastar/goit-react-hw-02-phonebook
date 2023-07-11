import { Component } from 'react';

class Form extends Component {
  state = {
    inputName: '',
    inputTel: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    console.log(event.currentTarget);
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ inputName: '', inputTel: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="inputName"
            value={this.state.inputName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          tel:
          <input
            type="text"
            name="inputTel"
            value={this.state.inputTel}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101'
      //   }}
      // >
      //   Привет МИР!
      // </div>
    );
  }
}

export default Form;
