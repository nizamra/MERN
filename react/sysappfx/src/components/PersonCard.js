import React from 'react';
export default class PersonCard extends React.Component {
    state = {
        age: this.props.age,
      };
    addAge = () => {
        this.setState({ age:  this.state.age+1});
      }
      render() {
          const { firstName, lastName, hairColor } = this.props;
        return (
            <fieldset>
                <h1>{firstName}</h1>
                <p>{lastName}</p>
                <p>{this.state.age}</p>
                <p>{hairColor}</p>
                <button onClick={ this.addAge } >Birth Day</button>
            </fieldset>
        );
    }
}