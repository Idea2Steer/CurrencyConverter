import React, { useState, useEffect } from "react";
import "./ConversionForm.css";

import axios from "axios";
import { Link } from "react-router-dom";
import CurrrencyCard from "./CurrencyCard/CurrencyCard";

function ConversionForm() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("aud");
  const [to, setTo] = useState("usd");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
      )
      .then((res) => {
        setInfo(res.data[from]);
      });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const convert = () => {
    var rate = info[to];
    setOutput(input * rate);
  };

  return (
    <div className="currency_right">
      <div className="purchase_box">
        <div className="row p-4">
          <div className="col-12 active_archive_section">
            <div className="radio-toolbar radio_toolbar"></div>
          </div>
        </div>
        <div className="d-block">
          <form className="row px-4 mb-5 justify-content-center">
            <div className="row position-relative">
              <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                <CurrrencyCard
                  onInputChange={setInput}
                  inputValue={input}
                  onCurrencyChange={setFrom}
                  selectedCurrency={from}
                  options={options}
                  label={`Amount in ${from}`}
                />
              </div>
              <div className="col-12 col-sm-6">
                <CurrrencyCard
                  inputValue={output.toFixed(2)}
                  onCurrencyChange={setTo}
                  selectedCurrency={to}
                  options={options}
                  label={`Amount in ${to}`}
                  disabled
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
              <Link
                to="#"
                type="submit"
                className="btn currency_get_started_btn"
                onClick={convert}
              >
                Convert
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConversionForm;
