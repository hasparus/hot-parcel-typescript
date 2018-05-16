import { hot } from "react-hot-loader";
import * as React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
`;

type State = {
  timesClicked: number;
};

class App extends React.Component<{}, State> {
  state = {
    timesClicked: 0,
  };

  private handleClick = () => {
    this.setState(({ timesClicked }) => ({
      timesClicked: timesClicked + 1,
    }));
  };

  render() {
    const { timesClicked } = this.state;
    return (
      <>
        <H1>Pretty awesome, huh?:</H1>
        <button onClick={this.handleClick}>
          Clicks: {timesClicked}
        </button>
        <input />
      </>
    );
  }
}

export default hot(module)(App);
