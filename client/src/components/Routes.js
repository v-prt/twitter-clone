import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Loader } from "../GlobalStyles";
import { BiLoader } from "react-icons/bi";

import { HomeFeed } from "./HomeFeed";
import { Notifications } from "./Notifications";
import { Bookmarks } from "./Bookmarks";
import { TweetDetails } from "./TweetDetails";
import { Profile } from "./Profile";
import { Error } from "./Error";

import { CurrentUserContext } from "../CurrentUserContext";

export const Routes = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? (
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
      <Route path="/error">
        <Error />
      </Route>
    </Switch>
  ) : (
    <Loader>
      <BiLoader />
    </Loader>
  );
};
