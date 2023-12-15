import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { httpClient } from "../.././../utils/HttpClient";
import { server } from "../../../constants/index";
import Swal from "sweetalert2";
import Select from "react-select";
import moment from "moment";
import Chart from "react-apexcharts";

window.Swal = Swal;

// class Mms_tray_chart extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//             name: "TRAY1",
//             data: [props.MC2.TRAY1_COUNT,props.MC.TRAY1_COUNT],
//             // data: [100, 500, 64, 760, 770, 256, 854, 2000],
//         },
//         {
//             name: "TRAY2",
//             data: [props.MC2.TRAY2_COUNT,props.MC.TRAY2_COUNT],
//             // data: [3560, 98, 77, 452, 41, 500, 82, 3252],
//         },
//         {
//             name: "TRAY3",
//             data: [props.MC2.TRAY3_COUNT,props.MC.TRAY3_COUNT],
//             // data: [150, 300, 52, 64, 100, 11, 24, 78],
//         },
//       ],

//       options : {
//       chart: {
//         type: "area",
//         height: 100,
//         stacked: true,
//         events: {
//           selection: function (chart, e) {
//             console.log(new Date(e.xaxis.min));
//           },
//         },
//       },
//       colors: ["#008FFB", "#00E396", "#CED4DC"],
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//       },
//       fill: {
//         type: "gradient",
//         gradient: {
//           opacityFrom: 0.6,
//           opacityTo: 0.8,
//         },
//       },
//       legend: {
//         position: "bottom",
//         horizontalAlign: "center",
//       },
//       xaxis: {
//         // categories: ["ML1","ML2","ML3","ML4","ML5","ML6","ML7","ML8"],
//         categories: [props.MC2.topic,props.MC.topic],
//       },
//     },
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div className="container-fluid md-3">
//             <center>
//                 <h2>Tray</h2>
//             </center>
//           <Chart
//             type="line"
//             width={1200}
//             height={560}
//             series={this.state.series}
//             options={this.state.options}
//           />
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default Mms_tray_chart;



// class Mms_tray_chart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: "TEAM A",
//           type: "area",
//         //   data: [props.MC2.TRAY_A,props.MC.TRAY_A],
//           data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
//         },
//         {
//           name: "TEAM B",
//           type: "line",
//         //   data: [props.MC2.TRAY_B,props.MC.TRAY_B],
//           data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
//         },
//         {
//           name: "TEAM C",
//           type: "line",
//         //   data: [props.MC2.TRAY_C,props.MC.TRAY_C],
//           data: [55, 85, 66, 41, 83, 94, 39, 52, 14, 41, 49],
//         },
//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: "line",
//         },
//         stroke: {
//           curve: "smooth",
//         },
//         fill: {
//           type: "solid",
//           opacity: [0.35, 1],
//         },
//         labels: [
//           "Dec 01",
//           "Dec 02",
//           "Dec 03",
//           "Dec 04",
//           "Dec 05",
//           "Dec 06",
//           "Dec 07",
//           "Dec 08",
//           "Dec 09 ",
//           "Dec 10",
//           "Dec 11",
//         ],
//         markers: {
//           size: 0,
//         },
//         yaxis: [
//           {
//             title: {
//               text: "Series A",
//             },
//           },
//           {
//             opposite: true,
//             title: {
//               text: "Series B",
//             },
//           },
//         ],
//         tooltip: {
//           shared: true,
//           intersect: false,
//           y: {
//             formatter: function (y) {
//               if (typeof y !== "undefined") {
//                 return y.toFixed(0) + " points";
//               }
//               return y;
//             },
//           },
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="line"
//           height={350}
//         />
//       </div>
//     );
//   }
// }


// export default Mms_tray_chart;


function Mms_tray_chart(props) {
  const state = {
    
    series: [
      {
        name: "TRAY 1",
        type: "area",
        // data: [45,22,36,78,96]
        data :  [props.MC2.TRAY1_COUNT,props.MC4.TRAY1_COUNT,props.MC8.TRAY1_COUNT,props.MC9.TRAY1_COUNT,props.MC10.TRAY1_COUNT],
        // data: [props.MC9.TRAY1_COUNT,props.MC10.TRAY1_COUNT],
      },
      {
        name: "TRAY 2",
        type: "line",
        // data: [32,44,85,57,26]
        data :  [props.MC2.TRAY2_COUNT,props.MC4.TRAY2_COUNT,props.MC8.TRAY2_COUNT,props.MC9.TRAY2_COUNT,props.MC10.TRAY2_COUNT],
        // data: [props.MC9.TRAY2_COUNT,props.MC10.TRAY2_COUNT],
      },
      {
        name: "TRAY 3",
        type: "line",
        // data: [80,72,44,87,65]
        data :  [props.MC2.TRAY3_COUNT,props.MC4.TRAY3_COUNT,props.MC8.TRAY3_COUNT,props.MC9.TRAY3_COUNT,props.MC10.TRAY3_COUNT],
        // data: [props.MC9.TRAY3_COUNT,props.MC10.TRAY3_COUNT],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "solid",
        opacity: [0, 2],
      },
      labels: [
        props.MC2.topic,props.MC4.topic,props.MC8.topic,props.MC9.topic,props.MC10.topic

        // props.MC9.topic,props.MC10.topic
        // "MC1","MC2","MC3","MC4","MC5"
     ]},
      yaxis: [
        {
          title: {
            text: "Series A",
          },
        },
        {
          opposite: true,
          title: {
            text: "Series B",
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    };

try{
  return (
    <div id="chart">
        <center>
            <h2>Tray</h2>
        </center>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  )
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}
export default Mms_tray_chart;