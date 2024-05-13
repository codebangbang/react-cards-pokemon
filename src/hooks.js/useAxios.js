import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [response, setResponse] = useState([]);
  const addData = async (restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponse((data) => [...data, response.data]);
  };
  return [response, addData];
}

export default useAxios;
