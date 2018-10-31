// Code ControlledInput Component Here
import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render() {
    return (
      <form>
        <option selected={true}>FFF</option>
        <option selected={false}>PPP</option>

        <input type="text" name="lastName" value={this.state.lastName}/>
      </form>
    )
  }
}

export default Form
