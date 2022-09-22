import React from "react";
import { shallow } from "enzyme";
import NavBar from "../../components/Navbar/NavBar";
import logo from "../../assets/svg/logo.svg";

describe("NavBar Components", () => {
  const comp = shallow(<NavBar />);

  it("should render without crashing", () => {
    expect(comp.exists()).toBe(true);
    expect(comp.hasClass("nav_bar_position")).toBe(true);
  });

  it("should render app logo", () => {
    expect(comp.find("img").first().prop("src")).toEqual(logo);
  });
});
