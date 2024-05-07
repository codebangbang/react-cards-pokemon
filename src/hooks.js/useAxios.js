import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [response, setResponse] = useState([]);

  const addData = async (formatter = (data) => data, restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponse((data) => [...data, formatter(response.data)]);
  };
  const clearResponses = () => setResponse([]);

  return [response, addData, clearResponses];
}

export default useAxios;
