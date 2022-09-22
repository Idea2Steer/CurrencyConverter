import CurrencySelector from "./CurrencySelector/CurrencySelector";

function CurrrencyCard({
  onInputChange,
  onCurrencyChange,
  selectedCurrency,
  options,
  label,
  inputValue,
  placeholder,
  disabled,
}) {
  return (
    <div className="align-items-end amount d-flex">
      <div className="ammount col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 mb-4 mb-lg-0">
        <label className="form-label">{label}</label>
        <div className="input-group currency_home_select_box">
          <input
            type="text"
            className="form-control border-0"
            placeholder={placeholder}
            onChange={(e) => onInputChange(e.target.value)}
            autoComplete="off"
            value={inputValue}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="ammount col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 ">
        <CurrencySelector
          onCurrencyChange={onCurrencyChange}
          selectedCurrency={selectedCurrency}
          options={options}
        />
      </div>
    </div>
  );
}

export default CurrrencyCard;
