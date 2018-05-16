import * as React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App component", () => {
  it("renders with default state", () => {
    const wrap = mount(<App />);
    const initState = { timesClicked: 0 };

    expect(wrap.state()).toMatchObject(initState);
  });
});
