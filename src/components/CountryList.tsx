import React, { useState } from "react";
import { useCountryList } from "../hooks";
import { Country } from "../hooks/useCountryList";
import useCountryData from "../hooks/useCountryData";
import { ErrorPage, CountryData } from "./";

const CountryList: React.FunctionComponent = () => {
  const countries: Country[] | undefined = useCountryList()?.data;
  const [country, setCountry] = useState<string | undefined>(undefined);
  const countryData = useCountryData(country);

  const changeEvent = function (e?: React.ChangeEvent<HTMLSelectElement>) {
    setCountry(e?.target.value);
  };

  return (
    <>
      <CountryData countryData={countryData} />

      {countryData && Object.keys(countryData.data).length == 0 && (
        <ErrorPage errorMsg="Sorry ! No Data Found" />
      )}
      {countries && countries.length > 0 ? (
        <form className="max-w-sm mx-auto mt-8">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the country
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => changeEvent(e)}
          >
            <option>Choose a country</option>
            {countries.map((obj, index) => {
              return (
                <option value={obj.iso} key={index}>
                  {obj.name}
                </option>
              );
            })}
          </select>
        </form>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default CountryList;
