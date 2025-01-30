import { useEffect, useState } from "react";

export type Country = {
  iso: string;
  name: string;
};

export type Countries = {
  data: Country[];
};

function useCountryList() {
  const [countries, setCountries] = useState<Countries | null>(null);

  const fetchData = async () => {
    const response = await fetch(`https://covid-api.com/api/regions?sort=asc`);
    const res: Countries = await response.json();
    setCountries(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return countries;
}

export default useCountryList;
