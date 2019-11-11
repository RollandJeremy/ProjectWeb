import React from "react";
import Chart from "../node_modules/chart.js";

import Image from "./Image/Image";
import api from "./api";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    api.getData().then(res => {
      var dat = res.data;
      var pays = [];
      var kill = [];
      var index;

      dat.forEach(psycho => {
        if (!pays.includes(psycho.pays)) {
          pays.push(psycho.pays);
          kill.push(psycho.killnumber);
        } else {
          index = pays.findIndex(element => {
            return element === psycho.pays;
          });
          kill[index] = kill[index] + psycho.killnumber;
        }
      });
      this.myChart = new Chart(this.canvasRef.current, {
        type: "bar",
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 50,
                  max: 700
                }
              }
            ]
          }
        },

        data: {
          labels: pays.map(d => d),
          datasets: [
            {
              label: "Kills by country",
              data: kill.map(d => d),
              backgroundColor: this.props.color
            }
          ]
        }
      });
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class BarChart2 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    api.getData().then(res => {
      var dat = res.data;
      var arme = [];
      var kill = [];
      var index;

      dat.forEach(psycho => {
        if (!arme.includes(psycho.arme)) {
          arme.push(psycho.arme);
          kill.push(psycho.killnumber);
        } else {
          index = arme.findIndex(element => {
            return element === psycho.arme;
          });
          kill[index] = kill[index] + psycho.killnumber;
        }
      });
      this.myChart = new Chart(this.canvasRef.current, {
        type: "bar",
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 3000
                }
              }
            ]
          }
        },

        data: {
          labels: arme.map(d => d),
          datasets: [
            {
              label: "Number of kill by type of gun",
              data: kill.map(d => d),
              backgroundColor: this.props.color
            }
          ]
        }
      });
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class BarChart3 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    api.getData().then(res => {
      var dat = res.data;
      var age = [
        "18-20",
        "21-30",
        "31-40",
        "41-50",
        "51-60",
        "61-70",
        "71-80",
        "81+"
      ];
      var number = [0, 0, 0, 0, 0, 0, 0, 0];

      dat.forEach(psycho => {
        if (psycho.age <= 20) {
          number[0]++;
        } else if (psycho.age <= 30) {
          number[1]++;
        } else if (psycho.age <= 40) {
          number[2]++;
        } else if (psycho.age <= 50) {
          number[3]++;
        } else if (psycho.age <= 60) {
          number[4]++;
        } else if (psycho.age <= 70) {
          number[5]++;
        } else if (psycho.age <= 80) {
          number[6]++;
        } else {
          number[7]++;
        }
      });
      this.myChart = new Chart(this.canvasRef.current, {
        type: "bar",
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 150
                }
              }
            ]
          }
        },

        data: {
          labels: age.map(d => d),
          datasets: [
            {
              label: "Number of killer by age",
              data: number.map(d => d),
              backgroundColor: this.props.color
            }
          ]
        }
      });
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    api.getData().then(res => {
      var dat = res.data;
      var arme = [];
      var kill = [];
      var index;

      dat.forEach(psycho => {
        if (!arme.includes(psycho.arme)) {
          arme.push(psycho.arme);
          kill.push(psycho.killnumber);
        } else {
          index = arme.findIndex(element => {
            return element === psycho.arme;
          });
          kill[index] = kill[index] + psycho.killnumber;
        }
      });
      this.myChart = new Chart(this.canvasRef.current, {
        type: "doughnut",
        options: {
          maintainAspectRatio: false
        },
        data: {
          labels: arme.map(d => d),
          datasets: [
            {
              label: "Number of killer by age",
              data: kill.map(d => d),
              backgroundColor: this.props.colors
            }
          ]
        }
      });
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class DoughnutChart2 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    api.getData().then(res => {
      var dat = res.data;
      var dead = ["Psycopath alive", "Pyscopath dead"];
      var number = [0, 0];

      dat.forEach(psycho => {
        if (psycho.statut === "Alive") {
          number[0]++;
        } else if (psycho.statut === "Dead") {
          number[1]++;
        }
      });

      this.myChart = new Chart(this.canvasRef.current, {
        type: "doughnut",
        options: {
          maintainAspectRatio: false
        },
        data: {
          labels: dead.map(d => d),
          datasets: [
            {
              data: number.map(d => d),
              backgroundColor: this.props.colors
            }
          ]
        }
      });
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class DoughnutChart3 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    api.getData().then(res => {
      var dat = res.data;
      console.log(dat);
      var jail = ["Jail", "Free", "Dead"];
      var number = [0, 0, 0];

      dat.forEach(psycho => {
        if (psycho.actual === "Jail") {
          number[0]++;
        } else if (psycho.actual === "Free") {
          number[1]++;
        } else if (psycho.actual === "xxx") {
          number[2]++;
        }
      });

      this.myChart = new Chart(this.canvasRef.current, {
        type: "doughnut",
        options: {
          maintainAspectRatio: false
        },
        data: {
          labels: jail.map(d => d),
          datasets: [
            {
              data: number.map(d => d),
              backgroundColor: this.props.colors
            }
          ]
        }
      });
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      psycho: [
        {
          wiki: "https://en.wikipedia.org/wiki/Ted_Bundy",
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ted_Bundy_headshot.jpg/220px-Ted_Bundy_headshot.jpg",
          name: "Ted Bundy",
          kill: 30,
          description:
            "Kidnapping, raping, dismembering females, kept their heads as souvenirs",
          nickname: "Lady Killer"
        },
        {
          wiki: "https://en.wikipedia.org/wiki/Donald_Henry_Gaskins",
          picture:
            "https://upload.wikimedia.org/wikipedia/en/4/4a/Donald_Henry_Gaskins.jpeg",
          name: "Donald Henry Gaskins",
          kill: 90,
          description: "torturing and mutilating",
          nickname: "The Hitchhikers' Killer"
        },
        {
          wiki: "https://en.wikipedia.org/wiki/Tsutomu_Miyazaki",
          picture:
            "https://upload.wikimedia.org/wikipedia/en/2/2b/Tsutomu_Miyazaki.jpg",
          name: "Tsutomu Miyazaki",
          kill: 30,
          description:
            "abducted little girls, sexual activities with their corpses, drinking victim's blood, eating body parts or preserved them, send postcards to the families describing the murder.",
          nickname: "The Human Dracula"
        },
        {
          wiki: "https://fr.wikipedia.org/wiki/Jack_the_Ripper",
          picture:
            "https://www.history.com/.image/t_share/MTU3ODc4NjAzNzkzODM1NzQz/history-lists-7-terrifying-historical-figures-jack-the-ripper-89860532-2.jpg",
          name: "Jack the Ripper",
          kill: "unknow",
          description: "surgical experience",
          nickname: "Jack the Ripper"
        },
        {
          wiki: "https://en.wikipedia.org/wiki/Andrei_Chikatilo",
          picture:
            "https://upload.wikimedia.org/wikipedia/en/5/59/Chikatilo-mugshot.jpg",
          name: "Andrei Chikatilo",
          kill: 53,
          description: "sexually assaulting, killing and mutilating",
          nickname: "The Butcher"
        },
        {
          wiki: "https://en.wikipedia.org/wiki/Luis_Garavito",
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/FichaPolicialdeGaravito.jpg/250px-FichaPolicialdeGaravito.jpg",
          name: "Luis Garavito",
          kill: 300,
          description: "poisoning to death with unprescribed medication",
          nickname: "The Beast"
        }
      ]
    };
  }

  render() {
    let psycho = null;
    if (true) {
      psycho = (
        <div>
          {this.state.psycho.map(x => {
            return (
              <Image
                nom={x.name}
                nombre={x.kill}
                image={x.picture}
                wiki={x.wiki}
                nick={x.nickname}
                desc={x.description}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Serial Killers Statistics</h1>

        <div className="widget1">
          <div className="sub chart-wrapper">
            <BarChart color="#B08EA2" />
          </div>
        </div>
        <div className="widget3">
          <div className="sub chart-wrapper">
            <BarChart3 color="#B08EA2" />
          </div>
        </div>
        <div className="widget2">
          <div className="sub chart-wrapper">
            <BarChart2 color="#B08EA2" />
          </div>

          <div className="sub chart-wrapper">
            <DoughnutChart
              colors={[
                "#a8e0ff",
                "#8ee3f5",
                "#70cad1",
                "#3e517a",
                "#b08ea2",
                "#BBB6DF",
                "#A61313",
                "#D5D91E",
                "#D91ED6",
                "#24D91E"
              ]}
            />
          </div>
        </div>

        <div>
          <div className="sub chart-wrapper">
            <DoughnutChart2 colors={["#a8e0ff", "#70cad1"]} />
          </div>

          <div className="sub chart-wrapper">
            <DoughnutChart3 colors={["#a8e0ff", "#8ee3f5", "#70cad1"]} />
          </div>
        </div>
        <h2>List of somes of the most famous serial killers</h2>
        {psycho}
      </div>
    );
  }
}
