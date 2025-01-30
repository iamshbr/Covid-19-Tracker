import { useEffect, useState } from "react";

export type GlobalData = {
  date: string;
  last_update: string;
  confirmed: number;
  confirmed_diff: number;
  deaths: number;
  deaths_diff: number;
  recovered: number;
  recovered_diff: number;
  active: number;
  active_diff: number;
  fatality_rate: number;
};

export type ResponseData = {
  data: GlobalData;
};

function useGlobalCovidData() {
  const [globalData, setGlobalData] = useState<ResponseData | null>(null);

  const fetchData = async () => {
    const response = await fetch(`https://covid-api.com/api/reports/total`);
    const res: ResponseData = await response.json();
    setGlobalData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return globalData;
}

export default useGlobalCovidData;
