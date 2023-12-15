import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { httpClient } from "../.././../utils/HttpClient";
import { server } from "../../../constants/index";
import Swal from "sweetalert2";
import Select from "react-select";
import moment from "moment";
import Chart from "react-apexcharts";

window.Swal = Swal;

// class MmsYieldChart extends Component {
//   constructor() {
//     super();

//     this.state = {
//         data :[],
//         series: [
//           {
//             name: "Shift_A",
//             data: [45, 58],
//             // data: [props.MC2.TL_YIELD_A,props.MC.TL_YIELD_A],
//             // color : '#f5698'
//           },
//           {
//             name: "Shift_B",
//             data: [54, 78],
//             // data: [props.MC2.TL_YIELD_B,props.MC.TL_YIELD_B],
//           },
//           {
//             name: "Shift_C",
//             data: [65, 74],
//             // data: [props.MC2.TL_YIELD_C,props.MC.TL_YIELD_C],
//           },
//         ],
//         options: {
//           chart: {
//             stacked: true,
//           },
//           plotOptions: {
//             bar: {
//               horizontal: true,
//               width: 20,
//             },
//           },
//           stroke: {
//             width: 1,
//           },
//           xaxis: {
//             // categories: [props.MC2.topic,props.MC.topic],
//           },
//           yaxis: {
//             labels: {
//                 formatter: function (val) {
//                   return val + "%"
//                 }
//               },
//             align: "center",
//             title: {
//               text: "Machine",
//               style: {
//                 fontSize: "20",
//               },
//             },
//           },
//           legend: {
//             position: "bottom",
//           },
//           dataLabels: {
//             enabled: true,
//           },
//           grid: {
//             show: true,
//             xaxis: {
//               lines: {
//                 show: false,
//               },
//             },
//             yaxis: {
//               lines: {
//                 show: true,
//               },
//             },
//           },
//         },
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div className="container-fluid md-3">
//             <center>
//                 <h2>Yield</h2>
//             </center>
//           <Chart
//             type="bar"
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
// export default MmsYieldChart;

// function mms_yield_chart(props) {
//   const state = {
//     series: [
//       {
//         name: "Shift_A",
//         data : [props.MC2.YIELD_A,props.MC.YIELD_A],
//         // data: [45, 100],
//       },
//       {
//         name: "Shift_B",
//         data : [props.MC2.YIELD_B,props.MC.YIELD_B],
//         // data: [54, 78],
//       },
//       {
//         name: "Shift_C",
//         data : [props.MC2.YIELD_C,props.MC.YIELD_C],
//         // data: [65, 95],
//       },
//     ],
//     options: {
//       chart: {
//         stacked: true,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//           width: 20,
//         },
//       },
//       stroke: {
//         width: 1,
//       },
//       xaxis: {
//         categories: [props.MC2.topic,props.MC.topic],
//         // categories: ["Category1", "Category2"], // ใส่ค่าของ X-Axis ตรงนี้
//       },
//       yaxis: {
//         labels: {
//           formatter: function (val) {
//             return val + "%"
//           }
//         },
//         align: "center",
//         title: {
//           text: "Machine",
//           style: {
//             fontSize: "20",
//           },
//         },
//       },
//       legend: {
//         position: "bottom",
//       },
//       dataLabels: {
//         enabled: true,
//       },
//       grid: {
//         show: true,
//         xaxis: {
//           lines: {
//             show: false,
//           },
//         },
//         yaxis: {
//           lines: {
//             show: true,
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <center>
//          <h2>Yield</h2>
//       </center>
//       <Chart
//         type="bar"
//         width={1200}
//         height={560}
//         series={state.series}
//         options={state.options}
//       />
//     </div>
//   );
// }

// export default mms_yield_chart;

function mms_yield_chart(props) {

    const state = {
      series: [
        {
          name: "Yield_A",
        // data :  [props.MC2.YIELD_A,props.MC4.YIELD_A,props.MC8.YIELD_A,props.MC9.YIELD_A,props.MC10.YIELD_A],
          data: [props.MC9.YIELD_A, props.MC10.YIELD_A],
          // data: [21, 42, 35, 55, 78, 64, 12, 45, 88, 45, 70],
        },
        {
          name: "Yield_B",
        // data :  [props.MC2.YIELD_B,props.MC4.YIELD_B,props.MC8.YIELD_B,props.MC9.YIELD_B,props.MC10.YIELD_B],
          data: [props.MC9.YIELD_B, props.MC10.YIELD_B],
          // data: [80, 78, 99, 99, 87, 55, 91, 90, 94, 99, 72],
        },
        {
          name: "Yield_C",
        // data :  [props.MC2.YIELD_C,props.MC4.YIELD_C,props.MC8.YIELD_C,props.MC9.YIELD_C,props.MC10.YIELD_C],
          data: [props.MC9.YIELD_C, props.MC10.YIELD_C],
          // data: [35, 41, 36, 26, 41, 48, 88, 77, 91, 12, 68],
        },
      ],
      options: {
        colors: ["#E68B55", "#65E67B", "#B66AE6"],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          axis: "y",
          value: 520,
          legend: "TEST",
          lineStyle: {
            stroke: "red",
          },
          textStyle: {
            fill: "red",
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          // categories:  [props.MC2.topic,props.MC4.topic,props.MC8.topic,props.MC9.topic,props.MC10.topic],
          categories: [props.MC9.topic, props.MC10.topic],
          // categories: [
          //   "Feb",
          //   "Mar",
          //   "Apr",
          //   "May",
          //   "Jun",
          //   "Jul",
          //   "Aug",
          //   "Sep",
          //   "Oct",
          //   "Nov",
          //   "Dec",
          // ],
        },
        yaxis: {
          title: {
            text: "% (Percent)",
            style: {
              fontSize: "15",
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " %";
            },
          },
        },
      },
    };


try {
    return (
      
      <div>
        <React.Fragment>
          <div className="container-fluid md-3">
            <center>
              <h2>Yield</h2>
            </center>
            <ReactApexChart
              type="bar"
              width={1200}
              height={560}
              series={state.series}
              options={state.options}
            />
          </div>
        </React.Fragment>
      </div>
    );
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}

export default mms_yield_chart;
