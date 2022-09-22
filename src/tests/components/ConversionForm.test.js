import React from "react";
import { shallow } from "enzyme";
import ConversionForm from "../../components/ConversionForm/ConversionForm";
import CurrrencyCard from "../../components/ConversionForm/CurrencyCard/CurrencyCard";

describe("Conversion Form Component", () => {
  const comp = shallow(<ConversionForm />);

  it("should render without crashing", () => {
    expect(comp.exists()).toBe(true);
    expect(comp.hasClass("currency_right")).toBe(true);
  });

  it("should render submit button by default", () => {
    const convertButton = comp.find(".currency_get_started_btn");
    expect(convertButton.exists()).toBe(true);
    expect(convertButton.text()).toEqual("Convert");
  });

  it("should render Input Currency Card component by default", () => {
    const currencyCard = comp.find(CurrrencyCard);
    expect(currencyCard.exists()).toBe(true);
    expect(currencyCard.first().prop("inputValue")).toEqual(0);
  });

  it("should render Output Currency Card component by default", () => {
    const currencyCard = comp.find(CurrrencyCard);
    expect(currencyCard.exists()).toBe(true);
    expect(currencyCard.first().prop("inputValue")).toEqual(0.0);
  });
});
