import React from "react";
import { shallow } from "enzyme";
import CurrencySelector from "../../components/ConversionForm/CurrencyCard/CurrencySelector/CurrencySelector";

describe("Currency Selector Component", () => {
  const options = ["OPTION 1", "OPTION 2"];

  const getComp = (props = {}) =>
    shallow(
      <CurrencySelector
        onCurrencyChange={props.onCurrencyChange}
        selectedCurrency={props.selectedCurrency}
        options={props.options}
      />
    );

  it("should render without crashing", () => {
    expect(getComp().exists()).toBe(true);
  });

  it("should not explode without given props", () => {
    const comp = getComp();

    expect(comp.exists()).toBe(true);
    expect(comp.find(".label").exists()).toBe(false);

    const select = comp.find("select");
    expect(select.exists()).toBe(true);
    expect(select.prop("value")).toBeUndefined();
    expect(select.prop("onChange")).toBeDefined();
  });

  it("should pass given value into Select component", () => {
    const comp = getComp({ selectedCurrency: options[0] });

    const select = comp.find("select");
    expect(select.prop("value")).toEqual(options[0]);
  });

  it("should use given onChange", () => {
    const mockOnChange = jest.fn();
    const comp = getComp({ onCurrencyChange: mockOnChange });

    comp.find("select").invoke("onChange")({ target: { value: options[1] } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenLastCalledWith(options[1]);
  });
});
