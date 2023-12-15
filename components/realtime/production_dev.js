import React from "react";
import "react-circular-progressbar/dist/styles.css";
// Animation
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";
import { api_Influx } from "../../constants";
import axios from "axios";
import { useEffect, useState } from "react";
import Mms_production_chart from "../realtime/mms_chart/mms_production_chart";
import Mms_yield_chart from "../realtime/mms_chart/mms_yield_chart";
import Mms_tray_chart from "../realtime/mms_chart/mms_tray_chart";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


const Production = () => {
  //const [datas_MClist, setDatas_MClist] = useState({});
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
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/129' order by time desc limit 1"
      );
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC(obj_MC);
      console.log("obj1");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC2, setDatas_MC2] = useState({});
  const getPosts2 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/130' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC2(obj_MC);
     
      console.log("obj2");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC3, setDatas_MC3] = useState({});
  const getPosts3 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/131' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC3(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC4, setDatas_MC4] = useState({});
  const getPosts4 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/132' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC4(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC5, setDatas_MC5] = useState({});
  const getPosts5 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/138' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC5(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC6, setDatas_MC6] = useState({});
  const getPosts6 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/139' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC6(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC7, setDatas_MC7] = useState({});
  const getPosts7 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/140' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC7(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC8, setDatas_MC8] = useState({});
  const getPosts8 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/144' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC8(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC9, setDatas_MC9] = useState([]);
  const getPosts9 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/145' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC9(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
      console.log(datas_MC9)
      console.log(res_MC);
      console.log(obj_MC.topic);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const [datas_MC10, setDatas_MC10] = useState({});
  const getPosts10 = async () => {
    try {
      const res_MC = await axios.get(
        api_Influx +
          "/query?pretty=true&db=influx&q=select * from mqtt_consumer where topic = 'gmma/pilot/146' order by time desc limit 1"
      );
      console.log(res_MC);
      const keys_MC = res_MC.data.results[0].series[0].columns;
      const values_MC = res_MC.data.results[0].series[0].values[0];
      var obj_MC = [];
      keys_MC.forEach((ele, i) => {
        obj_MC[ele] = values_MC[i];
      });
      setDatas_MC10(obj_MC);
     
      console.log("obj");
      console.log(obj_MC)
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
    getPosts3();
    getPosts4();
    getPosts5();
    getPosts6();
    getPosts7();
    getPosts8();
    getPosts9();
    getPosts10();

    // getMachine();

    const interval = setInterval(() => {
      console.log("Logs every minute");
      getPosts1();
      getPosts2();
      getPosts3();
      getPosts4();
      getPosts5();
      getPosts6();
      getPosts7();
      getPosts8();
      getPosts9();
      getPosts10();


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
  
  // Split Text เอาแค่ตัวเลขเครื่อง
  // const text = datas_MC.topic;
  // const splitMC = text.split('/');
  // const data_MC = splitMC[splitMC.length - 1];
  // console.log(data_MC)

  // const text2 = datas_MC2.topic;
  // const splitMC2 = text2.split('/');
  // const data_MC2 = splitMC2[splitMC2.length - 1];
  // console.log(data_MC2)

  return (
    <div className="wrapper" style={{ Height: "1000px" }}>
      <div className="content-wrapper" style={{ Height: "1000px" }}>
        <section className="content">
          <div className="main-content-container px-4 container-fluid">
            {/* <div className="page-header py-4 no-gutters row">
              <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                <h3 className="page-title" style={divStyle1}>
                  PRODUCTION RESULT
                </h3>
              </div>
            </div> */}
            {/* <div className="row"> */}
              {/* group1 */}
              {/* <div
                className="col-4 d-flex"
                style={{ border: "4px solid blue" }}
              >
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
                      M/C no. : {datas_MC4.topic}
                    </a>
                    <h3
                      className="page-title"
                      style={{ color: "blue", fontSize: "2rem" }}
                    >
                      {datas_MC4.mc_no}

                    </h3>
                  </div>

                  <div className="row-4">
                    <div className="col-12">
                      <div className="small-box bg-success" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC4.TL_OUT_A}
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
                            {datas_MC4.TL_OUT_B}
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
                            {datas_MC4.TL_OUT_C}
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
                      M/C no. : {datas_MC6.topic}
                    </a>
                    <h3
                      className="page-title"
                      style={{ color: "blue", fontSize: "2rem" }}
                    >
                      {datas_MC6.mc_no}

                    </h3>
                  </div>

                  <div className="row-4">
                    <div className="col-12">
                      <div className="small-box bg-success" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC6.TL_OUT_A}
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
                            {datas_MC6.TL_OUT_B}
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
                            {datas_MC6.TL_OUT_C}
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
              </div> */}
              {/* group2 */}
              {/* <div
                className="col-4 d-flex "
                style={{ border: "4px solid blue" }}
              >
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
                      M/C no. : {datas_MC4.topic}
                    </a>
                    <h3
                      className="page-title"
                      style={{ color: "blue", fontSize: "2rem" }}
                    >
                      {datas_MC4.mc_no}
                    </h3>
                  </div>

                  <div className="row-4">
                    <div className="col-12">
                      <div className="small-box bg-info" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC4.YIELD_A}
                            <sub style={divStyle5}>%</sub>
                          </h3>
                        </div>
                        <div className="icon"></div>
                        <a
                          href="#"
                          className="small-box-footer"
                          style={divStyle3}
                        >
                          Progress Shift A
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="small-box bg-info" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC4.YIELD_B}
                            <sub style={divStyle5}>%</sub>
                          </h3>
                        </div>
                        <div className="icon"></div>
                        <a
                          href="#"
                          className="small-box-footer"
                          style={divStyle3}
                        >
                          Progress Shift B
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="small-box bg-info" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC4.YIELD_C}
                            <sub style={divStyle5}>%</sub>
                          </h3>
                        </div>
                        <div className="icon"></div>
                        <a
                          href="#"
                          className="small-box-footer"
                          style={divStyle3}
                        >
                          Progress Shift C
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
                      M/C no. : {datas_MC6.topic}
 
                    </a>
                    <h3
                      className="page-title"
                      style={{ color: "blue", fontSize: "2rem" }}
                    >
                      {datas_MC6.mc_no}
                    </h3>
                  </div>

                  <div className="row-4">
                    <div className="col-12">
                      <div className="small-box bg-info" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC6.YIELD_A}
                            <sub style={divStyle5}>%</sub>
                          </h3>
                        </div>
                        <div className="icon"></div>
                        <a
                          href="#"
                          className="small-box-footer"
                          style={divStyle3}
                        >
                          Progress Shift A
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="small-box bg-info" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC6.YIELD_B}
                            <sub style={divStyle5}>%</sub>
                          </h3>
                        </div>
                        <div className="icon"></div>
                        <a
                          href="#"
                          className="small-box-footer"
                          style={divStyle3}
                        >
                          Progress Shift B
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="small-box bg-info" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC6.YIELD_C}
                            <sub style={divStyle5}>%</sub>
                          </h3>
                        </div>
                        <div className="icon"></div>
                        <a
                          href="#"
                          className="small-box-footer"
                          style={divStyle3}
                        >
                          Progress Shift C
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* group3 */}
              {/* <div
                className="col-4 d-flex"
                style={{ border: "4px solid blue" }}
              >
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
                      
                      M/C no. : {datas_MC4.topic}
                    </a>
                    <h3
                      className="page-title"
                      style={{ color: "blue", fontSize: "2rem" }}
                    >
                      {datas_MC4.mc_no}
                    </h3>
                  </div>

                  <div className="row-4">
                    <div className="col-12">
                      <div className="small-box bg-warning" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC4.TRAY1_COUNT}
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
                            {datas_MC4.TRAY2_COUNT}
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
                            {datas_MC4.TRAY3_COUNT}
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
                      M/C no. : {datas_MC6.topic}

                    </a>
                    <h3
                      className="page-title"
                      style={{ color: "blue", fontSize: "2rem" }}
                    >
                      {datas_MC6.mc_no}
                    </h3>
                  </div>

                  <div className="row-4">
                    <div className="col-12">
                      <div className="small-box bg-warning" style={divStyle4}>
                        <div className="inner">
                          <h3 style={divStyle1}>
                            {datas_MC6.TRAY1_COUNT}
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
                            {datas_MC6.TRAY2_COUNT}
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
                            {datas_MC6.TRAY3_COUNT}
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
            </div> */}


            <div className="page-header py-4 no-gutters row">
              <div className="text-sm-left mb-5 text-center text-md-left mb-sm-3 col-6 col-sm-12">
                <h3 className="page-title" style={divStyle1}>
                  PRODUCTION RESULT2
                </h3>
              </div>
            </div>


            <Tabs
              id="controlled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="output" title="Out Put">
                <div className="card card-primary">
                <div className="card-header"></div>
                  {<Mms_production_chart 
                  // MC={datas_MC} MC2={datas_MC2} MC3={datas_MC3} 
                  // MC4={datas_MC4} MC5={datas_MC5} MC6={datas_MC6} 
                  // MC7={datas_MC7} MC8={datas_MC8} 
                  MC9={datas_MC9} MC10={datas_MC10}  /> }
                </div>
              </Tab>

              {/* <Tab eventKey="yield" title="Yield">
                <div className="card card-primary">
                <div className="card-header"></div>
                  {<Mms_yield_chart 
                  // MC={datas_MC} MC2={datas_MC2} MC3={datas_MC3} 
                  // MC4={datas_MC4} MC5={datas_MC5} MC6={datas_MC6} 
                  // MC7={datas_MC7} MC8={datas_MC8} 
                  MC9={datas_MC9} MC10={datas_MC10} />}
                </div>
              </Tab> */}

              {/* <Tab eventKey="tray" title="Tray">
                <div className="card card-primary">
                <div className="card-header"></div>
                  {<Mms_tray_chart 
                  MC={datas_MC} MC2={datas_MC2} MC3={datas_MC3} 
                  MC4={datas_MC4} MC5={datas_MC5} MC6={datas_MC6} 
                  MC7={datas_MC7} MC8={datas_MC8} MC9={datas_MC9} MC10={datas_MC10} />}
                </div>
              </Tab> */}
            </Tabs>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Production;
