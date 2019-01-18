import React from 'react';
import ListEntry from './ListEntry.jsx';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      string: '',
      alert: false,
      alertString: ''
    };
    this.changeString = this.changeString.bind(this);
    this.addStringToArray = this.addStringToArray.bind(this);
    this.createAlert = this.createAlert.bind(this);
  }
  createAlert(event) {
    this.setState({
      alert: true,
      alertString: event.target.textContent
    });
  }
  changeString(event) {
    this.setState({
      string: event.target.value
    });
  }

  addStringToArray(event) {
    event.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.string],
      string: ''
    });
  }

  render() {
    return (
      <div>
        <div>Welcome Mina</div>
        <div>Add items</div>
        <form>
          <input
            type="text"
            value={this.state.string}
            onChange={this.changeString}
          />
          <input type="submit" onClick={this.addStringToArray} />
        </form>
        {this.state.array.map((str, index) => (
          <ListEntry value={str} key={index} createAlert={this.createAlert} />
        ))}
        <br />
        {this.state.alert && (
          <div>{'You clicked on: ' + this.state.alertString}</div>
        )}
      </div>
    );
  }
}

export default List;
