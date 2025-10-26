import React from "react";
import Maize from "./Maize";
import Barley from "./Barley";
import GroundNut from "./GroundNut";
import Cotton from "./Cotton";
import Cowpea from "./Cowpea";
import { Link } from "react-router-dom";
import "../../assets/css/crops.css";
import cotton1 from "../../assets/images/cotton1.png";

const Crop = () => {
  return (
    // <div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-2"></div>
    //       <div className="col-md-9">
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-md-3 crop-card">
    //               <Link to={"/crops/barley"}>Barley</Link>
    //             </div>

    //             <div className="col-md-3 crop-card">
    //               {/* <img src={}/> */}
    //               <Link to={"/crops/maize"}>Maize</Link>
    //             </div>
    //             <div className="col-md-3 crop-card">
    //               <Link to={"/crops/groundNut"}>GroundNut</Link>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-md-3 crop-card">
    //               {/* <img src={cotton1}/> */}
    //               <Link to={"/crops/cotton"}>Cotton</Link>
    //             </div>
    //             <div className="col-md-3 crop-card">
    //               <Link to={"/crops/cowpea"}>Cowpea</Link>
    //             </div>
    //             <div className="col-md-3 crop-card">
    //               <Link to={"/crops/cowpea"}>Rice</Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-1"></div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="container-crop ms-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-md-3 crop-card">
                  <Link to={"/crops/barley"}>Barley</Link>
                </div>

                <div className="col-md-3 crop-card">
                  {/* <img src={}/> */}
                  <Link to={"/crops/maize"}>Maize</Link>
                </div>
                <div className="col-md-3 crop-card">
                  <Link to={"/crops/groundNut"}>GroundNut</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 crop-card">
                  {/* <img src={cotton1}/> */}
                  <Link to={"/crops/cotton"}>Cotton</Link>
                </div>
                <div className="col-md-3 crop-card">
                  <Link to={"/crops/cowpea"}>Cowpea</Link>
                </div>
                <div className="col-md-3 crop-card">
                  <Link to={"/crops/rice"}>Rice</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Crop;
