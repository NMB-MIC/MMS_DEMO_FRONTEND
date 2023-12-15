import React from "react";
import "react-circular-progressbar/dist/styles.css";
// Animation
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";
import { api_Influx } from "../../constants";
import axios from "axios";
import { useEffect, useState } from "react";
import Mms_alarm_gantchart from "../realtime/mms_chart/mms_alarm_gantchart"

const Production = () => {
  const [datas_MClist, setDatas_MClist] = useState({});
  // const getMachine = async () => {
  //   try {
  //     let mc_list_data = await httpClient.get(server.GET_LIST_MC);
  //     setDatas_MClist(mc_list_data.data.result[0]);
  //   } catch (err) {
  //     console.log(`ERROR: ${err}`);
  //   }
  // };

  const [datas_MC, setDatas_MC] = useState({});

  const getPosts1 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/146' order by time desc limit 1"
      );
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC(obj_MC);
      console.log("obj");
      console.log(res_MC);
      console.log(obj_MC);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };


  
  const [datas_MC2, setDatas_MC2] = useState({});
 
  const getPosts2 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/132' order by time desc limit 1"
      );
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC2(obj_MC);
      console.log("obj");
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const MINUTE_MS = 5000;

  useEffect(() => {
    getPosts1();
    getPosts2();
    // getMachine();

    const interval = setInterval(() => {
      console.log("Logs every minute");
      getPosts1();
      getPosts2();
      // getMachine();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  const divStyle1 = {
    marginBottom: "0",
    fontWeight: 500,
    fontSize: "3.5rem",
    color: "black",
  };
  const divStyle2 = {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "2rem",
    color: "white",
    height: 50,
  };
  const divStyle3 = {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "1.5rem",
    color: "white",
  };

  const divStyle4 = {
    height: 150,
  };
  const divStyle5 = {
    fontSize: "1rem",
  };

  return (
    <div className="wrapper" style={{ Height: "1000px" }}>
      <div className="content-wrapper" style={{ Height: "1000px" }}>
        <section className="content">
          <div className="main-content-container px-4 container-fluid">
            <div className="page-header py-4 no-gutters row">
              <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                <h3 className="page-title" style={divStyle1}>
                  PRODUCTION RESULT
                </h3>
              </div>
            </div>
           


            <div className="row">
               {/* group1 */}
             <div className="col-4 d-flex" style={{border: "4px solid blue" }}>
              <div className="col-6">
                <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                  <a
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                                M/C no. : {datas_MC2.topic}
                  </a>
                  <h3
                    className="page-title"
                    style={{ color: "blue", fontSize: "2rem" }}
                  >
                    {datas_MC2.mc_no}
                  </h3>
                </div>

                <div className="row-4" >
                  <div className="col-12">
                    <div className="small-box bg-success" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.TL_OUT_A}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Output Shift A
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-success" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.TL_OUT_B}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Output Shift B
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-success" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.TL_OUT_C}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Output Shift C
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                  <a
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    M/C no. : {datas_MC.topic}
                
                  </a>
                  <h3
                    className="page-title"
                    style={{ color: "blue", fontSize: "2rem" }}
                  >
                    {datas_MC.mc_no}
                  </h3>
                </div>

                <div className="row-4">
                  <div className="col-12">
                    <div className="small-box bg-success" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.TL_OUT_A}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Output Shift A
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-success" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.TL_OUT_B}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Output Shift B
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-success" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.TL_OUT_C}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Output Shift C
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              {/* group2 */}
              <div className="col-4 d-flex " style={{border: "4px solid blue" }}>
              <div className="col-6">
                <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                  <a
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    M/C no. : {datas_MC2.topic}
                  </a>
                  <h3
                    className="page-title"
                    style={{ color: "blue", fontSize: "2rem" }}
                  >
                    {datas_MC2.mc_no}
                  </h3>
                </div>

                <div className="row-4">
                  <div className="col-12">
                    <div className="small-box bg-info" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.YIELD_A}
                          <sub style={divStyle5}>%</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Yield Shift A
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-info" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.YIELD_B}
                          <sub style={divStyle5}>%</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Yield Shift B
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-info" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.YIELD_C}
                          <sub style={divStyle5}>%</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Yield Shift C
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                  <a
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    M/C no. : {datas_MC.topic}
                  </a>
                  <h3
                    className="page-title"
                    style={{ color: "blue", fontSize: "2rem" }}
                  >
                    {datas_MC.mc_no}
                  </h3>
                </div>

                <div className="row-4">
                  <div className="col-12">
                    <div className="small-box bg-info" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.YIELD_A}
                          <sub style={divStyle5}>%</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Yield Shift A
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-info" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.YIELD_B}
                          <sub style={divStyle5}>%</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Yield Shift B
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-info" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.YIELD_C}
                          <sub style={divStyle5}>%</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        Yield Shift C
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              {/* group3 */}
              <div className="col-4 d-flex" style={{border: "4px solid blue" }}>
              <div className="col-6">
                <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                  <a
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    M/C no. : {datas_MC2.topic}
                  </a>
                  <h3
                    className="page-title"
                    style={{ color: "blue", fontSize: "2rem" }}
                  >
                    {datas_MC2.mc_no}
                  </h3>
                </div>

                <div className="row-4">
                  <div className="col-12">
                    <div className="small-box bg-warning" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.TRAY1_COUNT}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        TRAY 1 COUNTER
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-warning" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.TRAY2_COUNT}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        TRAY 2 COUNTER
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-warning" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC2.TRAY3_COUNT}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        TRAY 3 COUNTER
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                  <a
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    M/C no. : {datas_MC.topic}
                  </a>
                  <h3
                    className="page-title"
                    style={{ color: "blue", fontSize: "2rem" }}
                  >
                    {datas_MC.mc_no}
                  </h3>
                </div>

                <div className="row-4">
                  <div className="col-12">
                    <div className="small-box bg-warning" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.TRAY1_COUNT}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        TRAY 1 COUNTER
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-warning" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.TRAY2_COUNT}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        TRAY 2 COUNTER
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-box bg-warning" style={divStyle4}>
                      <div className="inner">
                        <h3 style={divStyle1}>
                          {datas_MC.TRAY3_COUNT}
                          <sub style={divStyle5}>pcs</sub>
                        </h3>
                      </div>
                      <div className="icon"></div>
                      <a
                        href="#"
                        className="small-box-footer"
                        style={divStyle3}
                      >
                        TRAY 3 COUNTER
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Production;
