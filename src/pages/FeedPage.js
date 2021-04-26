import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage();

  return (
    <>
      <h1>Feed</h1>;
    </>
  );
};
export default FeedPage;
