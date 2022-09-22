import React from "react";
import { shallow } from "enzyme";
import backgroundImage from "../../assets/images/background.jpg";
import Home from "../../components/Home";

describe("Home Components", () => {
  const comp = shallow(<Home />);

  it("should render without crashing", () => {
    expect(comp.exists()).toBe(true);
    expect(comp.hasClass("home")).toBe(true);
  });

  it("should render background image", () => {
    expect(comp.find("img").first().prop("src")).toEqual(backgroundImage);
  });
});
