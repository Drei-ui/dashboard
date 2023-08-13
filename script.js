//Sidebar Open
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
}

function closeSB(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// -------------- Weather Chart ----------
// script.js

// Target the weatherData div
const weatherDataDiv = document.getElementById('line-chart');

// Fetch data from the API
fetch('https://archive-api.open-meteo.com/v1/archive?latitude=13.4088&longitude=122.5615&start_date=2020-01-01&end_date=2023-08-13&hourly=temperature_2m')
    .then(response => response.json())
    .then(data => {
        // Process the fetched data
        const hourlyData = data['hourly']['apparent_temperature'];

        // Create a list to display the data
        const dataList = document.createElement('ul');
        hourlyData.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = `Date: ${entry['timestamp']} | Temperature: ${entry['value']}°C`;
            dataList.appendChild(listItem);
        });

        // Append the list to the weatherData div
        weatherDataDiv.appendChild(dataList);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        weatherDataDiv.textContent = 'Error fetching data.';
    });

//------------------Line Chart---------------------

var timeseriesoptions = {
    series: [{
    name: 'XYZ MOTORS',
    data: dates
  }],
    chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price'
    },
  },
  xaxis: {
    type: 'datetime',
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#line-chart2"), timeseriesoptions);
  chart.render();