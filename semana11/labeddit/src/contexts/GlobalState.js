/*import react, { useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "../contexts/GlobalContext";
import baseUrl from "../";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `${baseUrl}/posts`;
    axios
      .get(url, {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);

  const data = {
    posts,
    setPosts,
  };
  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;*/
