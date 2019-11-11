import React from "react";
import Api from "./api.js";

export class Signinup extends React.Component {
  state = {
    username: "",
    password: ""
  };
  click = async () => {
    try {
      var username = this.state.username;
      var password = this.state.password;
      if (username === "") {
        return;
      }
      if (password === "") {
        return;
      }
      const user = await Api.signin(username, password);
      localStorage.setItem("pass", user.pass);
      window.location = "/data";
    } catch (error) {
      //console.error(error);
    }
  };
  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  click2 = async () => {
    try {
      var username = this.state.username;
      var password = this.state.password;
      if (username === "") {
        return;
      }
      if (password === "") {
        return;
      }
      const user = await Api.signup(username, password);
      localStorage.setItem("pass", user.pass);
      window.location = "/data";
    } catch (error) {
      //console.error(error);
    }
  };

  render() {
    return (
      <html>
        <head></head>
        <body className="body_login">
          <div className="flex_container">
            <div className="Signinup">
              <h1>LOGIN </h1>
              <text>Username</text>
              <br />
              <input
                onChange={this.updateState}
                type="text"
                name="username"
              ></input>
              <br />
              <text>Password</text>
              <br />
              <input
                onChange={this.updateState}
                type="text"
                name="password"
              ></input>
              <br />
              <button onClick={this.click} type="submit">
                Connexion
              </button>
            </div>

            <div className="Signinup">
              <h1>REGISTER</h1>
              <text>Username</text>
              <br />
              <input
                onChange={this.updateState}
                type="text"
                name="username"
              ></input>
              <br />
              <text>Password</text>
              <br />
              <input
                onChange={this.updateState}
                type="text"
                name="password"
              ></input>
              <br />
              <button onClick={this.click2} type="submit">
                Connexion
              </button>
            </div>
          </div>

          <footer>
            <address>
              Contact:
              <br />
              <a class="little-links" href="mailto:lbensoussan@et.esiea.fr">
                Léa Bensoussan
              </a>
              <br />
              <a class="little-links" href="mailto:monnerie@et.esiea.fr">
                Vincent Monnerie
              </a>
              <br />
              <a class="little-links" href="mailto:jrolland@et.esiea.fr">
                Jeremy Rolland
              </a>
              <br />
              <p>
                <small>&COPY; 2019 Web Project</small>
              </p>
            </address>
          </footer>
        </body>
      </html>
    );
  }
}
