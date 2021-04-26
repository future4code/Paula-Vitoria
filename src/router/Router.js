import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import PostsPage from "../pages/PostsPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exacth path="/feed">
          <FeedPage />
        </Route>

        <Route exact path="/posts">
          <PostsPage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
