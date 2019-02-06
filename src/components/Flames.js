import React from "react";
import { flames } from "../helpers";

const Flames = props => {
  const result = flames(props.loveScore);
  return <p>Result should go here... {result}</p>;
};

export default Flames;
