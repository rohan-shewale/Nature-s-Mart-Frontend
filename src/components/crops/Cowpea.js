import React from "react";
import "../../assets/css/barley.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import cowpea from "../../assets/images/cowpea.png";
import cowpea1 from "../../assets/images/cowpea1.png";

const Cowpea = () => {
  return (
//     <div>
//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>Cotton</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead">
//                 <div className="col-md-9 main-content page-header-image">
//                   <img
//                     src={cowpea}
//                     alt="cowpea"
//                     className="class1"
//                     style={{ width: "950px" }}
//                   />
//                 </div>
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* ******************************************************************************************* */}
//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>General Information</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//               Cow pea is oldest annual legume grown throughout India for green pods, dry seeds, green manure and fodder. It is considered as crop of African origin. It is drought hardy crop also quick growing thus supressed weeds during initial stage. It also help to conserved soil and moisture. Cowpea is a good source of protein, calcium and iron. It is cultivated in irrigated areas of Punjab.
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>CLIMATE</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead ">
//                 <div className="col-md-9 main-content page-header-image">
//                   <img
//                     src={cowpea1}
//                     alt="cowpea"
//                     className="class1"
//                     style={{ width: "950px" }}
//                   />
//                 </div>
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>SOIL</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//               It can be grown in variety of soils but gives best result when grown on well drained loamy soils.
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>POPULAR VARIETIES WITH THEIR YIELD</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//               <strong>Cowpea 88</strong>: Recommended for cultivation throughout state. It is grown for fodder as well as for grain purpose. Its pods are large and seeds are bold having chocolate brown seed color. It is resistant to yellow mosaic and anthracnose disease. It gives average seed yield of 4.4 qtl/acre and 100 qtl/acre of green fodder.&nbsp;&nbsp; <br/>
// <br/>
// <strong>CL 367</strong>: It can be grown for fodder as well as for grain purpose. It bear large no of pods. Its seeds are small with creamy white color. It give resistance to yellow mosaic virus and anthracnose disease. It give average seed yield of 4.9 qtl/acre and 108 qtl/acre of green fodder.&nbsp; <br/>
// <br/>
// <strong>Other states Varieties:</strong><br/>
// <br/>
// <strong>Kashi Kanchan: </strong>Dwarf and bushy variety, suitable for cultivation in summer as well as rainy season. Pods are soft and of dark green color. It give average pod yield of 60-70 qtl/acre. <br/>
// <br/>
// <strong>Pusa su Komal</strong>: Gives average yield of 40 qtl/acre. <br/>
// <br/>
// <strong>Kashi Unnati</strong>: Pods are of soft and light green color. For first cutting ready to harvest in 40-45 days after sowing. Gives average yield of 50-60 qtl/acre.
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>LAND PREPARATION</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//               It required normal bed preparation like other pulse crops. Give two ploughing to bring soil to fine tilth and carry out planking after each ploughing.
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>SOWING</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//                 <p>
//                 <strong>Time of sowing</strong><br/>
// Best time for sowing is from March to Mid-July.<br/>
// <br/>
// <strong>Spacing</strong><br/>
// while sowing use row to row spacing of 30 cm and plant to plant spacing of 15 cm. <br/>
// <br/>
// <strong>Sowing Depth</strong><br/>
// sowing depth should be 3-4 cm.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/>
// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/>
// <strong>Method of sowing</strong><br/>
// Sow seeds with help of pora or seed cum fertilizer drill.
//                 </p>
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>SEED</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//                 <p>
//                   <strong>Seed Rate</strong>
//                   <br />
//                   When sown for fodder purpose, use seed rate of 20-25 kg for variety of Cowpea 88 and seed rate of 12 kg for variety of CL 367.

//                 </p>

//                 <p>
//                   <strong>Seed Treatment</strong>
//                   <br />
//                   Before sowing, treat seeds with Emisan 6@2.5gm/kg of seeds or Carbendazim 50%WP@2gm per kg of seeds. It will protect seeds from seed rot and seedling mortality.

//                   <br />
//                 </p>
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>WEED CONTROL</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//               To protect crop from weeds, apply Pendimethalin@750ml/acre in 200 Ltr of water within 24 hours of sowing.
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       <div className="container">
//         <div className="col-md-9 ">
//           <section className="main-content">
//             <header className="page-header">
//               <h4>IRRIGATION</h4>
//             </header>
//             <div className="jumbotron">
//               <h1 className="display-4"></h1>
//               <p className="lead p-background">
//               For good growth, on an average 4-5 irrigations are required. When crop is sown in May month, apply irrigation at interval of 15 days till monsoon arrival.
//               </p>
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* ******************************************************************************************* */}

//       {/* main div */}
//     </div>

<main className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="col-sm-6 col-md-4">
          <h2 style={{ color: "rgb(52, 131, 52)", marginTop: "-80px" }}>COWPEA</h2>
          <div className="zoom-effect">
            { /* image */}
            <img className="img-fluid shadow" src="https://t4.ftcdn.net/jpg/02/88/06/87/360_F_288068758_0Og73bSygg0nMNdQiPvdG7Hc3G7XmL1d.jpg" alt="" />
            { /* image */}
          </div>
        </div>

      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)", marginTop: "-60px" }}>
            General Information
          </h2>
          <p className="para">
            Cow pea is oldest annual legume grown throughout India for green pods, dry seeds, green manure and fodder. It is considered as crop of African origin. It is drought hardy crop also quick growing thus supressed weeds during initial stage. It also help to conserved soil and moisture. Cowpea is a good source of protein, calcium and iron. It is cultivated in irrigated areas of Punjab.
          </p>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            CLIMATE
          </h2>
          <img
            src={cowpea1}
            alt="cowpea"
            className="class1"
            style={{ width: "950px", marginLeft: "-30px", marginTop: "10px" }}
          />
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            SOIL
          </h2>
          <p className="para">
            It can be grown in variety of soils but gives best result when grown on well drained loamy soils.
          </p>
        </div>
      </div>


      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            POPULAR VARIETIES WITH THEIR YIELD
          </h2>
          <p className="lead para p-background">
            <b><strong>Cowpea 88:</strong></b> Recommended for cultivation throughout state. It is grown for fodder as well as for grain purpose. Its pods are large and seeds are bold having chocolate brown seed color. It is resistant to yellow mosaic and anthracnose disease. It gives average seed yield of 4.4 qtl/acre and 100 qtl/acre of green fodder.&nbsp;&nbsp;
            <br />
            <b>
              <strong>
                <br />
                CL 367:
              </strong>
            </b>
            It can be grown for fodder as well as for grain purpose. It bear large no of pods. Its seeds are small with creamy white color. It give resistance to yellow mosaic virus and anthracnose disease. It give average seed yield of 4.9 qtl/acre and 108 qtl/acre of green fodder.&nbsp;
            <br />
            <br />
            <b>
              <strong>Other States Variety</strong>
            </b>
            <br />
            <br />

            <b><strong>Kashi Kanchan: </strong></b>Dwarf and bushy variety, suitable for cultivation in summer as well as rainy season. Pods are soft and of dark green color. It give average pod yield of 60-70 qtl/acre. <br />
            <br />
            <b><strong>Pusa su Komal</strong>:</b> Gives average yield of 40 qtl/acre. <br />
            <br />
            <b><strong>Kashi Unnati</strong>:</b> Pods are of soft and light green color. For first cutting ready to harvest in 40-45 days after sowing. Gives average yield of 50-60 qtl/acre.
          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            LAND PREPARATION
          </h2>
          <p className="para">
            It required normal bed preparation like other pulse crops. Give two ploughing to bring soil to fine tilth and carry out planking after each ploughing.
          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            SOWING DEPTH
          </h2>
          <p className="lead para p-background">
            <b><strong>Time of sowing</strong></b>
            <br />
            For optimum yield, complete sowing from 15 October to 15
            November. If sowing get delayed yield will get declined. <br />
            <br />
            <b><strong>Spacing</strong></b>
            <br />
            while sowing use row to row spacing of 30 cm and plant to plant spacing of 15 cm.
            <br />
            <b>
              <strong>
                &nbsp;
                <br />
                Sowing Depth
              </strong>
            </b>
            <br />
            sowing depth should be 3-4 cm.
            <br />
            <br />

          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            SEED
          </h2>
          <p className="lead para p-background">
            <b><strong>Seed Rate</strong></b>
            <br />
            When sown for fodder purpose, use seed rate of 20-25 kg for variety of Cowpea 88 and seed rate of 12 kg for variety of CL 367.
            <br />
            <br />
            <b><strong>Seed Treatment</strong></b>
            <br />
            Before sowing, treat seeds with Emisan 6@2.5gm/kg of seeds or Carbendazim 50%WP@2gm per kg of seeds. It will protect seeds from seed rot and seedling mortality.
          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            WEED CONTROL
          </h2>
          <p className="lead para p-background">
            To protect crop from weeds, apply Pendimethalin@750ml/acre in 200 Ltr of water within 24 hours of sowing.
          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            IRRIGATION
          </h2>
          <p className="lead para p-background">
            For good growth, on an average 4-5 irrigations are required. When crop is sown in May month, apply irrigation at interval of 15 days till monsoon arrival.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Cowpea;
