import { useEffect, useState } from "react";
import axios from "axios";
const useRequesteData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
        alert("Aconteceu algo de errado. Tente novemente");
      });
  }, [url]);
  return data;
};
export default useRequesteData;
