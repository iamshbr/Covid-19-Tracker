import React, { useState, useEffect } from "react";
import { ResponseData } from "./useGlobalCovidData";

function useCountryData(countryIso: string | undefined) {
  const [countryData, setCountryData] = useState<ResponseData | null>(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://covid-api.com/api/reports/total?iso=${countryIso}`
    );
    const res: ResponseData = await response.json();
    setCountryData(res);
  };

  useEffect(() => {
    console.log(countryIso);
    if (countryIso) fetchData();
  }, [countryIso]);

  return countryData;
}

export default useCountryData;
