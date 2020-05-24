import React from 'react';
import ShoppingListItems from './ListItems';

class App extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  addItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
