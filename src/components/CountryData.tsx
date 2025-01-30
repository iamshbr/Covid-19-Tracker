import React from "react";
import { ResponseData } from "../hooks/useGlobalCovidData";
import { CountryChart } from "./";

interface Props {
  countryData: ResponseData | null;
}

const CountryData: React.FunctionComponent<Props> = ({ countryData }) => {
  return (
    <>
      {countryData && Object.keys(countryData.data).length > 0 && (
        <>
          <CountryChart
            active={countryData ? countryData.data.active : 0}
            deaths={countryData ? countryData.data.deaths : 0}
            confirmed={countryData ? countryData.data.confirmed : 0}
          />

          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 max-w-sm mx-auto mt-5">
            <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-gray-200">
                  Confirmed
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {Intl.NumberFormat().format(countryData.data.confirmed)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-gray-200 ">
                  Active
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {Intl.NumberFormat().format(countryData.data.active)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-gray-200 ">
                  Death
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {Intl.NumberFormat().format(countryData.data.deaths)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-gray-200 ">
                  Last Updated Date
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {countryData.data.date}
                </dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </>
  );
};

export default CountryData;
