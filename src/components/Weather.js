import React, { Component } from "react";

const Weather = (props) => {
  return (
    <div className="weather__info">
      {props.city && props.country && (
        <p className="weather__key">
          <span>
            Location: {props.city}, {props.country}
          </span>
        </p>
      )}

      {props.temperature && (
        <p className="weather__key">
          <span className="weather__value">
            Temperature:{" "}
            {props.temperature === undefined
              ? ""
              : Math.round(
                  (parseFloat(props.temperature).toFixed(2) - 273.15) * 100
                ) / 100}
          </span>
        </p>
      )}

      {props.humidity && (
        <p className="weather__key">
          <span className="weather__value">Humidity: {props.humidity} </span>
        </p>
      )}

      {props.description && (
        <p className="weather__key">
          <span className="weather__value">
            Conditions: {props.description}
          </span>
        </p>
      )}
      {props.error && (
        <p className="weather__key">
          <span className="weather__error">{props.error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
