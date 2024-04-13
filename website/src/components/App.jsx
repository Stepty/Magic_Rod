import './styles/App.css'
import GraphHolder from './GraphHolder.jsx'
import View from './View.jsx'

import cubejs from "@cubejs-client/core";
import Chart from "chart.js/auto";
import moment from "moment";

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ2NjY4OTR9.0fdi5cuDZ2t3OSrPOMoc3B1_pwhnWj4ZmM3FHEX7Aus",
  { apiUrl: "https://awesome-ecom.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1" }
);

cubejsApi
  .load({
    measures: ["Orders.count"],
    timeDimensions: [ {
      dimension: "Orders.createdAt",
      granularity: `day`,
      dateRange: [`08/01/2020`,`09/01/2020`]
    } ]
  })
  .then(resultSet => {
    new Chart(document.getElementById("chart"), {
      type: "line",
      options: {},
      data: chartJsData(resultSet)
    });
  });

  var chartJsData = function (resultSet) {
    return {
      datasets: [
        {
          label: "Orders Count",
          data: resultSet.chartPivot().map(function (r) {
            return r["Orders.count"];
          }),
          backgroundColor: "rgb(255, 99, 132)"
        }
      ],
      labels: resultSet.categories().map(function (c) {
        return moment(c.x).format("DD MMM");
      })
    };
  };

function App() {

  return (
    <div>
      <View></View>
      <GraphHolder></GraphHolder>
    </div>
  )
}

export default App
