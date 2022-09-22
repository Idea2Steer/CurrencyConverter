function CurrencySelector({ onCurrencyChange, selectedCurrency, options }) {
  return (
    <select
      id="currency_select"
      onChange={(e) => {
        onCurrencyChange(e.target.value);
      }}
      value={selectedCurrency}
      className="form-select filter_select"
    >
      {options &&
        options.map((res, ind) => {
          return (
            <option value={res} key={ind}>
              {" "}
              {res.toUpperCase()}{" "}
            </option>
          );
        })}
    </select>
  );
}

export default CurrencySelector;
