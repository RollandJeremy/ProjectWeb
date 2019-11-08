import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from '../node_modules/chart.js'


import * as data from './data.json';
const {yaya}= data;
console.log(yaya);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let country = ['France','USA','Chili','Canada','Australia','Russia','England','Italy','South Africa'];
  let data = [];
  let lol = Generatekills(1000);
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: country[i],
      value: lol[i]
    });
  }
  return data;
}

function Generatekills(nombre){
    var deadbyCountry=[0,0,0,0,0,0,0,0,0,0,0];    
  for(var i=0; i < nombre;i++){
    var x = Math.floor(Math.random() * 11);    
    deadbyCountry[x]=deadbyCountry[x]+1;    
  }
  for(var y=0;y<10;y++){
    deadbyCountry[y]=Math.round(deadbyCountry[y]*(Math.random()));  
  }  
  return deadbyCountry;
}


function getRandomArrayPie(numItems) {
  // Create random array of objects
  let names =  ['Strangulation','Poison','Sniper','Hax','Knife','Gun'];
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getData() {
  let data = [];
  data.push({
    title: 'Kills by country',
    data: getRandomArray(9)
  });

  
  data.push({
    title: 'Number of gun',
    data: getRandomArrayPie(6)
  });



  return data;
}


function getDataPie() {
  let data = [];
  data.push({
    title: 'Data 4',
    data: getRandomArrayPie(6)
  });

  return data;
}


// BarChart
class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

 
  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: {
	      maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 200
              }
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.color
        }]
      }
    });
  }

  render() {
    return (
        <canvas ref={this.canvasRef} />
    );
  }
}

// Doughnut
class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

 
  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      options: {
	      maintainAspectRatio: false
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.colors
        }]
      }
    });

  }


  render() {
    return <canvas ref={this.canvasRef} />;
  }
}




// App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData()
    };
  }

  
  render() {
    return (
      <div className="App">
        <div className="App">
      <h3> Chart.js test</h3>

      <div id="time" onLoad="displaytime()"></div>

    </div>

      <div>
        <div className="sub chart-wrapper">
          <BarChart
            data={this.state.data[0].data}
            title={this.state.data[0].title}
            color="#B08EA2"
          />
        </div> 

        <div className="sub chart-wrapper">
          <DoughnutChart
            data={this.state.data[0].data}
            title={this.state.data[0].title}
            colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
          />
        </div>
      </div> 

      <div>
        <div className="sub chart-wrapper">
          <BarChart
            data={this.state.data[1].data}
            title={this.state.data[1].title}
            color="#B08EA2"
          />
        </div> 

        <div className="sub chart-wrapper">
          <DoughnutChart
            data={this.state.data[1].data}
            title={this.state.data[1].title}
            colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
          />
        </div>
      </div>


      </div>

      
    );
  }
}



export default App;
