import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles, { Wrapper } from "../GlobalStyles";

import { Sidebar } from "./Sidebar";
import { HomeFeed } from "./HomeFeed";
import { Notifications } from "./Notifications";
import { Bookmarks } from "./Bookmarks";
import { TweetDetails } from "./TweetDetails";
import { Profile } from "./Profile";

import { CurrentUserContext } from "../CurrentUserContext";

export const App = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />
      {currentUser ? (
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
          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route path="/:handle">
            <Profile />
          </Route>
        </Switch>
      ) : (
        <Wrapper>Loading App...</Wrapper>
      )}
    </BrowserRouter>
  );
};
