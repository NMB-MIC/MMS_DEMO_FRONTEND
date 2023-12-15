import React, { Component, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { httpClient } from "../.././../utils/HttpClient";
import { server } from "../../../constants/index";
import Swal from "sweetalert2";
import Select from "react-select";
import moment from "moment";

window.Swal = Swal;

// class Mms_production_chart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {







//       series2: [

//         {
//           name: "ShiftA",
//           type: "column",
//           // group : 'OutputGroup',
//           // stacked : "True",
//           data: [props.MC9.TL_OUT_A,props.MC10.TL_OUT_A],
//           // data: [3633, 3691, 6825, 2945, 914, 9152, 4671, 2853]
//         },
//         {
//           name: "ShiftB",
//           type: "column",
//           // group : 'OutputGroup',
//           // stacked : "True",
//           data: [props.MC9.TL_OUT_B,props.MC10.TL_OUT_B],
//           // data: [1394, 2757, 1624, 3480, 4906, 7526, 4828, 2683],
//         },
//         {
//           name: "ShiftC",
//           type: "column",
//           // group : 'OutputGroup',
//           // stacked : "True",
//           data: [props.MC9.TL_OUT_C,props.MC10.TL_OUT_C],
//           // data: [1622, 493, 2837, 53, 9472, 2122, 7294, 2515],
//         },
//         {
//           name: "Yield",
//           type: "line",
//           // group : 'YieldGroup',
//           data: [90, 70, 60, 80, 85, 90, 84, 80],
//         },
//       ],

//       options2: {
//         chart: {
//           height: 200,
//           type: "column",
//           stacked: "True",
//         },
//         dataLabels: {
//           enabled: true,
//           formatter: function (val) {
//             return val;
//           },
//         },
//         xaxis: {
//           // categories: ["ML1","ML2","ML3","ML4","ML5","ML6","ML7","ML8"],
//           categories: [props.MC9.topic,props.MC10.topic],
//         },

//         yaxis: [
//           {
//             seriesName: "ShiftA",
//             show: true,
//             min: 0,
//             // max: 10000,
//             title: {
//               text: "Pcs",
//               style: {
//                 fontSize: "25",
//               },
//             },
//           },
//           {
//             seriesName: "ShiftA",
//             show: false,
//           },
//           {
//             seriesName: "ShiftA",
//             show: false,
//           },
//           // {
//           //   seriesName: "Yield",
//           //   show: "True",
//           //   opposite: true,
//           //   min: 0,
//           //   max: 100,
//           //   labels: {
//           //     formatter: (value) => value.toFixed(0) + "%",
//           //   },
//             // title: {
//             //   text: "Yield(%)",
//             // },
//           // },
//         ],

//         // title: {
//         //   align: "center",
//         //   text: "Out put",
//         //   style: {
//         //     fontSize: "20",
//         //   },
//         // },
//       },
//     }
//       // design button
//       // this.style = {
//       //   background: "blue",
//       //   color: "white",
//       //   fontSize: "25px",
//       //   textAlign: "center",
//       //   borderRadius: "5px",
//       //   height: 65,
//       // };
//   }

//   // getGanttDataMC = async () => {
//   //   const array = await httpClient.get(server.Master_mc_URL);
//   //   console.log(array.data.resultMc);
//   //   const Machine = array.data.resultMc.map((d) => ({
//   //     label: d.machine_no,
//   //   }));
//   //   this.setState({ showMC: Machine });
//   // };

//   // componentDidMount = async () => {
//   //   await this.getGanttDataMC();
//   //   await this.getGanttData();
//   // };

//   // getGanttData = async () => {
//   //   let result = await httpClient.get(
//   //     server.GANTT_MMS_URL +
//   //       "/" +
//   //       this.state.start_date +
//   //       "/" +
//   //       this.state.selectMC
//   //   );
//   //   console.log(result);
//   //   if (result.data.series[0].data[0] === undefined) {
//   //     Swal.fire({
//   //       icon: "error",
//   //       text: "Can not find data gantchart!",
//   //     }).then(() => {
//   //       window.location.replace("../grinding_MMS_alarm");
//   //     });
//   //   } else {
//   //     // ค่าที่ get ได้ส่งไปที่ state prop ชื่อ ganttData
//   //     await this.setState({ ganttData: result.data.series });
//   //   }
//   //   console.log(result.data.series);
//   // };
//   // // onchange label will fix value at selectMC
//   // handleChange(e) {
//   //   this.setState({ selectMC: e.label });
//   // }
 
//   render() {
//     // console.log(this.state.showMC);
//     // console.log(this.state.selectMC);

//     return (
//             <React.Fragment>
//             <div className="container-fluid md-3">
//                 <center>
//                     <h2>Out Put</h2>
//                 </center>
//               <ReactApexChart
//                 type="bar"
//                 width={1200}
//                 height={560}
//                 series={this.state.series2}
//                 options={this.state.options2}
//               />
//             </div>
//           </React.Fragment>
//     );
//   }
// }



function Mms_production_chart(props) {  
  // this.state = {
  //   shift_A : [],
  //   shift_B : [],
  //   shift_C : [],
  // }

  // componentDidMount = async () => {
  //   let mc_list_data = await httpClient.post(server.GET_MASTER_MC);
  //   this.setState({
  //     selected_machine: mc_list_data.data.result[0].mc_no,
  //   });
  //   await this.getMC_list();
  //   this.click_update();
  //   setTimeout(
  //     function () {
  //       //Start the timer
  //       this.click_update();
  //     }.bind(this),
  //     6000000
  //   );
  // };
  
  
  const state = {

    
   series: [
      {
        name: "ShiftA",
        // data :  [props.MC2.TL_OUT_A,props.MC4.TL_OUT_A,props.MC8.TL_OUT_A,props.MC9.TL_OUT_A,props.MC10.TL_OUT_A],
        data: [props.MC9.TL_OUT_A,props.MC10.TL_OUT_A],
        // data: [3633, 3691, 6825, 2945],
      },
      {
        name: "ShiftB",
        // data :  [props.MC2.TL_OUT_B,props.MC4.TL_OUT_B,props.MC8.TL_OUT_B,props.MC9.TL_OUT_B,props.MC10.TL_OUT_B],
        data:[props.MC9.TL_OUT_B,props.MC10.TL_OUT_B],
        // data: [1394, 2757, 1624, 3480],
      },
      {
        name: "ShiftC",
        //  data :  [props.MC2.TL_OUT_C,props.MC4.TL_OUT_C,props.MC8.TL_OUT_C,props.MC9.TL_OUT_C,props.MC10.TL_OUT_C],
        data:[,props.MC9.TL_OUT_C,props.MC10.TL_OUT_C]
        // data: [1622, 493, 2837, 53],
      },
    ],
    options: {
      colors: ["#E68B55", "#65E67B", "#B66AE6"],
      chart: {
        height: 200,
        type: "bar",
        stacked: "True",
      },
      dataLabels: {
        
        enabled: true,
      },
      xaxis: {
        type: "category",
        // categories: ["ML1", "ML2", "ML3", "ML4"],
        categories: [props.MC9.topic,props.MC10.topic],
      },
      yaxis: [
        {
          seriesName: "ShiftA",
          show: true,
          min: 0,
          title: {
            text: "Pcs",
            style: {
              fontSize: "20",
            },
          },
        },
        {
          seriesName: "ShiftA",
          show: false,
        },
        {
          seriesName: "ShiftA",
          show: false,
        },
      ],
    },
  }

  try {
    return (
      <div>
        <React.Fragment>
          <div className="container-fluid md-3">
            <center>
              <h2>Out Put</h2>
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

export default Mms_production_chart;
