import React from "react";
import Api from "./api.js";

export class Signinup extends React.Component {
  click = async () => {
    try {
      const user = await Api.signin("aa", "bb");
      localStorage.setItem("pass", user.pass);
      window.location = "/data";
    } catch (error) {
      //console.error(error);
    }
  };

  render() {
    return (
      <div className="Signinup">
        <h1>LOGIN REGISTER</h1>
        <button onClick={this.click} type="submit">
          Connexion
        </button>
      </div>
    );
  }
}
