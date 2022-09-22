import React from "react";
import { shallow } from "enzyme";
import CurrrencyCard from "../../components/ConversionForm/CurrencyCard/CurrencyCard";
import CurrencySelector from "../../components/ConversionForm/CurrencyCard/CurrencySelector/CurrencySelector";

describe("Currency Card Component", () => {
  const getComp = (props = {}) =>
    shallow(
      <CurrrencyCard
        onInputChange={props.onInputChange}
        onCurrencyChange={props.onCurrencyChange}
        selectedCurrency={props.selectedCurrency}
        options={props.options}
        label={props.label}
        inputValue={props.inputValue}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    );

  it("should render without crashing", () => {
    expect(getComp().exists()).toBe(true);
    expect(getComp().hasClass("amount")).toBe(true);
  });

  it ("should render label and input by default", () => {
    const label = getComp().find(".form-label");
    expect(label.exists()).toBe(true);

    const input = getComp().find("input");
    expect(input.exists()).toBe(true);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("value")).toBeUndefined();
  });

  it ("should display given value", () => {
    const comp = getComp({ inputValue: 1 });
    expect(comp.find("input").prop("value")).toEqual(1);
  });

  it("should render currency selectors without options when no given props", () => {
    const comp = getComp(true);
    const currencySelector = comp.find(CurrencySelector);
    expect(currencySelector.length).toEqual(1);
    expect(currencySelector.first().prop("options")).toBeUndefined();
  });
});
