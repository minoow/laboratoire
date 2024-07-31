import React from "react";
import { css } from "@emotion/react";

const HomePage = () => {
  return (
    <div
      css={css`
      padding: 80px 120px;
      @media screen and (max-width: 720px) {
      padding: 24px 40px;
      `}
    >
      Le laboratoire – WebGL and JavaScript Experiments
    </div>
  );
};

export default HomePage;
