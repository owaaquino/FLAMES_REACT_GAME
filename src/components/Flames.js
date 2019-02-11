import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { flames, getResult } from "../helpers";

const FlameResult = styled.div`
  & > h3 {
    font-size: 2em;
    text-transform: uppercase;
    @media (max-width: 930px) {
      font-size: 1.3em;
    }
  }
  & > hr {
    margin-top: 30px;
    text-align: center;
    width: 30%;
    -webkit-box-shadow: 0px 6px 44px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 6px 44px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 6px 44px -9px rgba(0, 0, 0, 0.75);
  }
`;

const Flames = props => {
  const result = flames(props.loveScore);
  const resultDesc = getResult(result);

  if (props.loveScore === undefined) {
    return <p>&nbsp;</p>;
  } else {
    return (
      <FlameResult>
        <hr />
        <h3>
          {result.toUpperCase()} - {resultDesc}
        </h3>
      </FlameResult>
    );
  }
};

Flames.propTypes = {
  loveScore: PropTypes.number.isRequired
};

export default Flames;
