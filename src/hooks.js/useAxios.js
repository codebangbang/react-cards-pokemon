import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(keyInLS, baseUrl) {
  const [responses, setResponses] = useLocalStorage(keyInLS);

  const addData = async (formatter = data => data, restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
  };
  const clearData = () => setResponses([]);
  return [responses, addData, clearData];
}

function useLocalStorage(key, initialValue = []) {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
export { useAxios , useLocalStorage};
