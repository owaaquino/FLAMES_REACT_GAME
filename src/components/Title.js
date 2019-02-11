import React from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  text-align: center;
  & > h2 {
    font-size: 1.6em;
  }
`;

const Title = props => {
  return (
    <PageTitle>
      <h2>
        F.L.A.M.E.S <span role="img">🔥</span>
      </h2>
      <p>
        A match making game 90s kids use to play. But this time we added some
        funny results.
      </p>
    </PageTitle>
  );
};

export default Title;
