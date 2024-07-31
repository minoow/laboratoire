import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />

      <HomePage />
    </>
  );
};

export default App;
