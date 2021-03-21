import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";

import { Sidebar } from "./Sidebar";
import { HomeFeed } from "./HomeFeed";
import { Notifications } from "./Notifications";
import { Bookmarks } from "./Bookmarks";
import { TweetDetails } from "./TweetDetails";
import { Profile } from "./Profile";

import { CurrentUserContext } from "../CurrentUserContext";

export const App = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/:tweetid">
            <TweetDetails />
          </Route>
          <Route path="/:profileId">
            <Profile />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};
