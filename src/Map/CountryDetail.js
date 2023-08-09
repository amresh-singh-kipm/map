import "./Map.css";
import React from "react";
import { conutryDeatails } from "../utils/constant";

function CountryDetail({ details }) {
  console.log(details);
  return (
    <div className="country-details-wrapper">
      {details ? (
        <>
          <div className="country-name">
            <h3 className="heading">{details[0]?.name.common}</h3>
          </div>
          <div className="image-box">
            <img src={`${details[0]?.flags?.png}`} alt="flag" />
          </div>
          <ul className="details-list">
            <div>
              {Object.values(conutryDeatails).map((title, index) => {
                return (
                  <li key={index} className="list-item">
                    <h3>{title} :- </h3>
                  </li>
                );
              })}
            </div>
            <div>
              {Array.isArray(details) &&
                details?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="list-item">
                        <h3>{item.name.common}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.capital}</h3>
                      </li>
                      <li className="list-item">
                        <h3> {Object.values(item.languages)}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.area}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.independent === true ? "True" : "False"}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.capital}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.population}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.region}</h3>
                      </li>
                      <li className="list-item">
                        <h3>{item.subregion}</h3>
                      </li>
                      <li className="list-item">
                        <h3>
                          {item?.timezones.map((time, index) => {
                            return (
                              <React.Fragment key={index}>
                                <span>{time}</span>
                                <br />
                              </React.Fragment>
                            );
                          })}
                        </h3>
                      </li>
                    </React.Fragment>
                  );
                })}
            </div>
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default CountryDetail;
