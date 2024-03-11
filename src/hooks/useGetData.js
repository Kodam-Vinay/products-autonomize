import { useEffect, useState } from "react";
import { API_URL } from "../constants/constants";

const useGetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (data?.length > 0) {
    return data;
  }
};

export default useGetData;
