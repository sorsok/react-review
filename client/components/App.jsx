import React from 'react';
import List from './List.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
  }
  changeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  render() {
    return (
      <div>
        First: <input onChange={this.changeFirstName} /> <br />
        Last: <input onChange={this.changeLastName} /> <br />
        <br />
        {this.state.firstName === 'Mina' &&
          this.state.lastName === 'Sorsok' && <List />}
      </div>
    );
  }
}

export default App;
