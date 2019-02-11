import React from "react";
import PropTypes from "prop-types";
import { nameToArray } from "../helpers";
import styled from "styled-components";

const LoveForm = styled.form`
  padding-top: 30px;
  & > div > label {
    display: inline-block;
    margin-right: 10px;
  }
  & > div > input {
    width: 40%;
    height: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
    padding-left: 10px;
    @media (max-width: 930px) {
      display: block;
      margin-top: 5px;
      width: 100%;
    }
  }
  & > button {
    margin-top: 20px;
    padding: 10px 10px;
    width: 100px;
    border: none;
    background-color: #ff4b4b;
    color: #fefefe;
    font-weight: 400;
  }
`;

class Flames extends React.Component {
  static propTypes = {
    getLoveScore: PropTypes.func
  };

  matchInput = e => {
    e.preventDefault();
    // let personOne =
    //   e.target.elements.name.value + e.target.elements.lastName.value;
    // let personTwo =
    //   e.target.elements.name_two.value + e.target.elements.last_name_two.value;

    let personOne = e.target.elements.name.value;
    let personTwo = e.target.elements.name_two.value;

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
      <LoveForm onSubmit={this.matchInput}>
        <div>
          <label>
            <strong>Enter Name: </strong>
          </label>
          <input type="text" name="name" placeholder="Name" required />
          {/* <input type="text" name="lastName" placeholder="Last Name" required /> */}
        </div>
        <div>
          <label>
            <strong>Enter Name: </strong>
          </label>
          <input type="text" name="name_two" placeholder="Name" required />
          {/* <input
            type="text"
            name="last_name_two"
            placeholder="Last Name"
            required
          /> */}
        </div>
        <button>Match!</button>
      </LoveForm>
    );
  }
}

export default Flames;
