import React from "react";
import { Route, Redirect } from "react-router-dom";
import User from "./api.js";

export const Security = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (User.isAuthentificated() === true) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    }}
  />
);
