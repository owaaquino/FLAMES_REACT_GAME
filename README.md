# F.L.A.M.E.S

A match making game 90s kids use to match him/her with his/her crush. But this time we added some funny results.

**Goal:**

- Learn to use props and state
- Manipulating arrays
- Using ES6 filter() arrays
- Learn how to use a separate file for our functions for better readability. ( helper.js )

**Features:**

- Accepts two names in an input and make them as an array of letters
- Return result according to states final value

**Techs:**

- React.js
- Javascript ES6
- CSS
- HTML

**Live links:**

- Hosted with Netlify - [https://flames.netlify.com/](https://flames.netlify.com/)

# Notes

Prerequisites:

- Must install Nodejs on your unit
- Must install NPM on your unit
- Install create-react-app installed to your node module ( check out [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app) for how to install the framework)
- Have a basic understanding of Javascript (ES6)
- Have a basic knowledge about React.js framework
- Styled Component is included in the dependencies of your npm
```
        npm install styled-component --save
```
## 1. Initialize and create basic Components

## App.js

Render our components to the site and update our future states.
```javascript
    import React, { Component } from "react";
    import Title from "./components/Title";
    import Flames from "./components/Flames";
    import Form from "./components/Form";

    class App extends Component {

      render() {
        return (
          <div className="App">
            <Title />
            <Form getLoveScore={this.getLoveScore} />
            <Flames loveScore={this.state.loveScore} />
          </div>
        );
      }
    }

    export default App;
```
## Title.js

Is just a simple stateless components that display the application Title and Simple description of the app.
```javascript
    import React from "react";

    const Title = props => {
      return (
        <div>
          <h1>
            F.L.A.M.E.S <span role="img">🔥</span>
          </h1>
          <p>A match making game 90s kids use to play. But this time we added some funny results.</p>
        </div>
      );
    };

    export default Title;
```
## Form.js

This component will accepts two names (first name and last name) to be generated.
```javascript
    import React from "react";

    class Flames extends React.Component {

      render() {
        return (
          <form>
            <div>
              <p>
                <strong>Enter the name of person below:</strong>
              </p>
              <input
                type="text"
                name="name"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
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
                placeholder="First Name"
              />
              <input
                type="text"
                name="last_name_two"
                placeholder="Last Name"
              />
            </div>
            <button>Match!</button>
          </form>
        );
      }
    }

    export default Flames;
```
## Flames.js

Will display the result of the names provided after validating.
```javascript
    import React from "react";

    const Flames = props => {
      return (
        <h3>
          // generated resulg should go here
        </h3>
      );
    };

    export default Flames;
```
## helper.js

For readability we'll create a separate file for our complicated functions.
```javascript
    // combine the first and last name of a person then converts them to an array of letters.
    export function nameToArray(name) {
      let updatedName = name.toUpperCase();
      //remove spaces on the name
      updatedName = updatedName.replace(/\s+/g, "");
      //convert string to array
      return updatedName.split("");
    }

    // loop into our flames array to know which letter to use on our result
    export function flames(n) {
      let flames = ["f", "l", "a", "m", "e", "s"];
      let match = "";
      for (let i = 0; i < n; i++) {
        match = flames[i];
      }
      return match;
    }

    // randomizer for our list of result
    export function rando(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    // filters into the result based on the letter we generated and return a
    // short description of the letter.
    export function getResult(n) {
      const posibleAnswer = [
        "friend",
        "friendzoned",
        'flirting',
        'fling',
        'feeling',
        "frenimies",
        "lover",
        "landian lang",
        "luluha",
        "angry",
        "adorable",
        "asawa",
        "asuwang",
        "marriage",
        "may kabit",
        "may kahati",
        "maybe",
        "mabubuntis at iiwan",
        "enemy",
        "engage",
        "sweet",
        "sumpaan",
        "suntukan",
        "sabaw"
      ];

      let filteredResult = posibleAnswer.filter(result => result[0] === n);

      return rando(filteredResult);
    }
```
## 2. Setting our states

We first create our state so that the result of the matching can be dynamic and can be passed into the children.

## App.js
```javascript
    import React, { Component } from "react";
    import Title from "./components/Title";
    import Flames from "./components/Flames";
    import Form from "./components/Form";

    class App extends Component {
      state = {
        loveScore: 0
      };

      getLoveScore = score => {
        this.setState({
          loveScore: score
        });
      };

      render() {
        return (
          <div className="App">
            <Title />
            <Form getLoveScore={this.getLoveScore} />
            <Flames loveScore={this.state.loveScore} />
          </div>
        );
      }
    }

    export default App;
```
- we initialize our state loveScore to 0.
- we create getLoveScore() function to update our state. Then pass it to the <Forms />.
- we added loveScore states as props to display the result.

## 3. Add onSubmit event on to our form

## Form.js
```javascript
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
              <input type="text" name="name" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div>
              <p>
                <strong>Enter the name of person below:</strong>
              </p>
              <input type="text" name="name_two" placeholder="First Name" />
              <input type="text" name="last_name_two" placeholder="Last Name" />
            </div>
            <button>Match!</button>
          </form>
        );
      }
    }
```
- First thing to do is to get the values of the names and separate them on different variable
```javascript
    atchInput = e => {
        e.preventDefault();
        let personOne =
          e.target.elements.name.value + e.target.elements.lastName.value;
        let personTwo =
          e.target.elements.name_two.value + e.target.elements.last_name_two.value;

        let pOne = nameToArray(personOne);
        let pTwo = nameToArray(personTwo);

      };
```
- nameToArray() function was imported from our helper.js. This function combined the last name and first name of a person then convert them to an array.
- Second, is to compare the letters on the two arrays of name if they have the same value. We'll use the ES6 filter() method to filter out same values of the arrays then we create a new array called difference where these are the letters that has no equal to the two arrays.
```javascript
    // compare two names
        let difference = pOne
          .filter(x => !pTwo.includes(x))
          .concat(pTwo.filter(x => !pOne.includes(x)));
```
- Last, is to update our state.  We use the modulus ( % ) to get the remainder of the value when divide to 6 so that we can iterate it easily into our array.
```javascript
    // update the states score
        this.props.getLoveScore(difference.length % 6);
      };
```
## 4. Displaying the result

Now that we have update state value. We can now know what value to display into our <Flames> component.

## Flames.js
```javascript
    import { flames, getResult } from "../helpers";

    const Flames = props => {
      const result = flames(props.loveScore);
      const resultDesc = getResult(result);
      return (
        <h3>
          {result.toUpperCase()} - {resultDesc}
        </h3>
      );
    };
```
- we use ff functions for the final result
    - flames() - used for getting the letter the value is equal to.
    - getResult() - generate a random equivalent description of the value we get from flames()