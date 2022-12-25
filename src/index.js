import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>Hello World</SecondaryButton>
    <TertiaryButton disabled>Hello World</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
