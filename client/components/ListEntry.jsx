import React from 'react';
class ListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div onClick={this.props.createAlert}>{this.props.value}</div>;
  }
}

export default ListEntry;
