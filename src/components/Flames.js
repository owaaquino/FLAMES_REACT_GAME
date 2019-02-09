import React from "react";
import PropTypes from 'prop-types';
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

Flames.propTypes = {
  loveScore: PropTypes.number.isRequired
}


export default Flames;
