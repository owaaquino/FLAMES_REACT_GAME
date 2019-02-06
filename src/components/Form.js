import React from "react";
import { nameToArray } from "../helpers";

class Flames extends React.Component {
  matchInput = e => {
    e.preventDefault();
    let personOne =
      e.target.elements.name.value + e.target.elements.lastName.value;
    let personTwo =
      e.target.elements.name_two.value + e.target.elements.last_name_two.value;

    let pOne = nameToArray(personOne);
    let pTwo = nameToArray(personTwo);

    console.log(pOne);
    console.log(pTwo);

    // compare two names
    let difference = pOne
      .filter(x => !pTwo.includes(x))
      .concat(pTwo.filter(x => !pOne.includes(x)));

    // update the states score
    this.props.getLoveScore(difference.length % 6);
    console.log(difference);
  };
  render() {
    return (
      <form onSubmit={this.matchInput}>
        <div>
          <p>
            <strong>Enter the name of person below:</strong>
          </p>
          <input
            type="text"
            name="name"
            ref="name_one"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            ref="last_name_one"
            placeholder="Last Name"
          />
        </div>
        <div>
          <p>
            <strong>Enter the name of person below:</strong>
          </p>
          <input
            type="text"
            name="name_two"
            ref="name_two"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name_two"
            ref="last_name_two"
            placeholder="Last Name"
          />
        </div>
        <button>Match!</button>
      </form>
    );
  }
}

export default Flames;
