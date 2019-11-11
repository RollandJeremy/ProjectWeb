import React from "react";
import Api from "./api.js";

export class Signinup extends React.Component {
  click = async () => {
    try {
      const user = await Api.signin("jeremy", "nono");
      localStorage.setItem("pass", user.pass);
      window.location = "/data";
    } catch (error) {
      //console.error(error);
    }
  };

  render() {
    return (
      <html>
         <head>

        </head>
        <body className="body_login">
      <div className="Signinup">
        <h1>LOGIN REGISTER</h1>
        <text>Username</text><br />
        <input type="text" name="username"></input>
        <br />
        <text>Password</text><br />
        <input type="text" name="password"></input>
        <br />
        <button onClick={this.click} type="submit">
          Connexion
        </button>
      </div>
      <footer>
      <address>
          Contact:<br />
          <a class="little-links" href="mailto:lbensoussan@et.esiea.fr">
              Léa Bensoussan
          </a><br />
          <a class="little-links" href="mailto:monnerie@et.esiea.fr">
              Vincent Monnerie
          </a><br />
          <a class="little-links" href="mailto:jrolland@et.esiea.fr">
              Jeremy Rolland
          </a><br />
          <p><small>&COPY; 2019 Web Project</small></p>
      </address>
  </footer>
  </body>
  </html>
    );
  }
}
