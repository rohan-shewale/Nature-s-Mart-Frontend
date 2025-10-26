import React from "react";
import "../../assets/css/barley.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import barley from "../../assets/images/barley.jpg"
import barley1 from "../../assets/images/barley1.png";

const Barley = () => {
  return (
    // <div style={{paddingLeft:"300px"}}>
    //   <div className="container mainDiv">
    //     <div className="row">
    //     <div className="col-md-12 ">
    //       <section className="main-content">
    //         <header className="page-header" style={{ width: "950px" }}>
    //           <h4>BARLEY (JOW)</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead">
    //             <div className="col-md-9 main-content page-header-image">
    //               <img
    //                 src={barley}
    //                 alt="barley"
    //                 className="class1"
    //                 style={{ width: "950px" }}
    //               />
    //             </div>
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>

    //   {/* ******************************************************************************************* */}
    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>General Information</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             It is quite significant cereal after wheat, maize & rice. Barley
    //             is cultivated in summer season in temperate area while it is
    //             sown in winter seasons in tropical zones. In India it is planted
    //             in rabi season. It possesses excellent drought resistance
    //             capacity.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>CLIMATE</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead ">
    //             <div className="col-md-9 main-content page-header-image">
    //               <img
    //                 src={barley1}
    //                 alt="barley1"
    //                 className="class1"
    //                 style={{ width: "950px" }}
    //               />
    //             </div>
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>SOIL</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Barley plants are cultivated on significant number of soil such
    //             as sodic, light & saline soil. Although, it gives good result in
    //             moderately heavy loam to sandy soils having neutral to saline
    //             response as well as moderate fertility. Acidic soils are not
    //             suitable for barley cultivation.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>POPULAR VARIETIES WITH THEIR YIELD</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             <strong>PL 419:</strong> This variety suitable under rainfed
    //             condition. It has broad upright leaves. Plant height is 80 cm.
    //             Resistant to yellow rust and smuts has thin husked bold seeds.
    //             Matures in 130 days. Gives average yield of 14 qtl/acre.
    //             <br />
    //             <strong>
    //               <br />
    //               PL 172:
    //             </strong>
    //             Suitable for throughout Punjab state under irrigated condition.
    //             It is six row semi dwarf variety. Resistant to lodging. It is
    //             suitable for malting. It matures in 124 days. It gives average
    //             yield of 14 qtl/acre.
    //             <br />
    //             <br />
    //             <strong>PL 807:</strong> Medium broad and upright leaves. It is
    //             highly resistive to lodging. Ears are dense and erect. Grains
    //             are of medium and light yellow color. It is resistant to brown
    //             rust, yellow rust and loose rust. Ready to harvest in 137 days.
    //             Give average yield of 17.2 qtl/acre. <br />
    //             <br />
    //             <strong>DWRUB52:</strong> This variety is having profuse
    //             tillering. Plant height is about 101 cm. Ears are dense, erect,
    //             arrow shaped and of medium size. It is resistant to brown rust,
    //             yellow rust and loose rust, covered smut and leaf blight
    //             disease. Give average yield of 17.3 qtl/acre. <br />
    //             <strong>
    //               <br />
    //               VJM 201:
    //             </strong>
    //             Two variety having narrow and upright leaves. Plant height is of
    //             118 cm. this variety prone to less lodging. Ears are dense and
    //             tapered. Grains are bold and white with thin husk. It is
    //             resistant to brown rust, yellow rust and loose rust and stripe
    //             disease. It is suitable for brewing industry. Matures in 135
    //             days. It gives average yield of 14.8 qtl/acre.
    //             <br />
    //             <strong>
    //               <br />
    //               BH 75
    //             </strong>
    //             : Semi dwarf, early maturing variety. It gives resistant to
    //             yellow rust. It is used for malting purpose. <br />
    //             <br />
    //             <strong>BH 393:</strong> Suitable for Punjab and Haryana state.
    //             It is sown under irrigated and timely sown areas. <br />
    //             <br />
    //             <strong>PL 426:</strong> It is semi dwarf variety, ready to
    //             harvest in 125 days. Suitable for cultivation under irrigated
    //             areas. It gives resistant to lodging, yellow rust, loose and
    //             covered smuts. Its grains are bold. It gives average yield of
    //             14.5 qtl/acre.
    //             <br />
    //             <br />
    //             <strong>Other States Variety</strong>
    //             <br />
    //             <br />
    //             RD 2035, BCU 73, DWRUB 64, RD 2503
    //             <br />
    //             <br />
    //             PL 751, NARENDRA BARLEY 2, GETANJALI (K1149)
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>LAND PREPARATION</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Carry out ploughing 2-3 times properly to make the land weed
    //             free. Before sowing crop land must be properly prepared smooth
    //             till fine tilth. Ploughing should be followed by 2-3 harrowing
    //             to conserved moisture in soil. The stubbles and roots of earlier
    //             crop should be hand-picked up and dash out of the ground as it
    //             attracts termites.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>SOWING</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             <strong>Time of sowing</strong>
    //             <br />
    //             For optimum yield, complete sowing from 15 October to 15
    //             November. If sowing get delayed yield will get declined. <br />
    //             <br />
    //             <strong>Spacing</strong>
    //             <br />
    //             Use row to row spacing of 22.5 cm. In case of delay sowing, use
    //             spacing of 18-20 cm.
    //             <br />
    //             <strong>
    //               &nbsp;
    //               <br />
    //               Sowing Depth
    //             </strong>
    //             <br />
    //             Use depth of 3-5 cm for crop under irrigated conditions and 5-8
    //             cm depth for rainfed conditions.
    //             <br />
    //             <br />
    //             <strong>Method of Sowing </strong>
    //             <br />
    //             For sowing use broadcasting and seed drill method.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>SEED</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             <strong>Seed Rate</strong>
    //             <br />
    //             Under irrigated conditions, use seed rate of 35 kg/acre and for
    //             rainfed conditions, use seed rate of 45 kg/acre.
    //             <br />
    //             <br />
    //             <strong>Seed Treatment</strong>
    //             <br />
    //             To enhance the yield growth seeds should be treated with
    //             Bavistin@2 gm/kg to protect it from smut disease. It can be
    //             treated with Vitavax @2.5 gm/kg to prevent it from covered smut
    //             disease. To make seed termites free it should be treated with
    //             250 ml Formothion in 5.3 ltr of water.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>WEED CONTROL</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             In initial stage of crop, weed control is necessary to obtained
    //             good crop growth along with good yield. Broad and narrow leaves
    //             are two major weeds in barley. To control broad leaf weed, apply
    //             post emergence weedicide 2,4-D@250 gm/100 Ltr of water per acre,
    //             30-35 days after sowing. To control narrow leaf weeds use
    //             Isoproturon 75%WP@500 gm/100 Ltr of water or Pendimethalin 30%
    //             EC@1.4 Ltr/100 ltr water for one acre.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   {/* main div */}
    //   </div>
    // </div>

    <main className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="col-sm-6 col-md-4">
          <h2 style={{ color: "rgb(52, 131, 52)", marginTop: "-80px" }}>BARELY (JOW)</h2>
          <div className="zoom-effect">
            { /* image */}
            <img className="img-fluid shadow" src="https://c4.wallpaperflare.com/wallpaper/504/43/670/food-grain-barley-hordeum-cereal-wallpaper-preview.jpg" alt="" />
            { /* image */}
          </div>
        </div>

      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)", marginTop: "-80px" }}>
            General Information
          </h2>
          <p className="para">
            It is quite significant cereal after wheat, maize & rice. Barley
            is cultivated in summer season in temperate area while it is
            sown in winter seasons in tropical zones. In India it is planted
            in rabi season. It possesses excellent drought resistance
            capacity.
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
            src={barley1}
            alt="barley1"
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
            Barley plants are cultivated on significant number of soil such
            as sodic, light & saline soil. Although, it gives good result in
            moderately heavy loam to sandy soils having neutral to saline
            response as well as moderate fertility. Acidic soils are not
            suitable for barley cultivation.
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
            <b><strong>PL 419:</strong></b> This variety suitable under rainfed
            condition. It has broad upright leaves. Plant height is 80 cm.
            Resistant to yellow rust and smuts has thin husked bold seeds.
            Matures in 130 days. Gives average yield of 14 qtl/acre.
            <br />
            <b>
            <strong>
              <br />
              PL 172:
            </strong>
            </b>
            Suitable for throughout Punjab state under irrigated condition.
            It is six row semi dwarf variety. Resistant to lodging. It is
            suitable for malting. It matures in 124 days. It gives average
            yield of 14 qtl/acre.
            <br />
            <br />
            <b><strong>PL 807:</strong></b> Medium broad and upright leaves. It is
            highly resistive to lodging. Ears are dense and erect. Grains
            are of medium and light yellow color. It is resistant to brown
            rust, yellow rust and loose rust. Ready to harvest in 137 days.
            Give average yield of 17.2 qtl/acre. <br />
            <br />
            <b><strong>DWRUB52:</strong></b> This variety is having profuse
            tillering. Plant height is about 101 cm. Ears are dense, erect,
            arrow shaped and of medium size. It is resistant to brown rust,
            yellow rust and loose rust, covered smut and leaf blight
            disease. Give average yield of 17.3 qtl/acre. <br />
            <b>
            <strong>
              <br />
              VJM 201:
            </strong>
            </b>
            Two variety having narrow and upright leaves. Plant height is of
            118 cm. this variety prone to less lodging. Ears are dense and
            tapered. Grains are bold and white with thin husk. It is
            resistant to brown rust, yellow rust and loose rust and stripe
            disease. It is suitable for brewing industry. Matures in 135
            days. It gives average yield of 14.8 qtl/acre.
            <br />
            <b>
            <strong>
              <br />
              BH 75
            </strong>
            </b>
            : Semi dwarf, early maturing variety. It gives resistant to
            yellow rust. It is used for malting purpose. <br />
            <br />
            <b><strong>BH 393:</strong></b> Suitable for Punjab and Haryana state.
            It is sown under irrigated and timely sown areas. <br />
            <br />
            <b><strong>PL 426:</strong></b> It is semi dwarf variety, ready to
            harvest in 125 days. Suitable for cultivation under irrigated
            areas. It gives resistant to lodging, yellow rust, loose and
            covered smuts. Its grains are bold. It gives average yield of
            14.5 qtl/acre.
            <br />
            <br />
            <b>
            <strong>Other States Variety</strong>
            </b>
            <br />
            <br />
            RD 2035, BCU 73, DWRUB 64, RD 2503
            <br />
            <br />
            PL 751, NARENDRA BARLEY 2, GETANJALI (K1149)
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
            Carry out ploughing 2-3 times properly to make the land weed
            free. Before sowing crop land must be properly prepared smooth
            till fine tilth. Ploughing should be followed by 2-3 harrowing
            to conserved moisture in soil. The stubbles and roots of earlier
            crop should be hand-picked up and dash out of the ground as it
            attracts termites.
          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            SOWING
          </h2>
          <p className="lead para p-background">
            <b><strong>Time of sowing</strong></b>
            <br />
            For optimum yield, complete sowing from 15 October to 15
            November. If sowing get delayed yield will get declined. <br />
            <br />
            <b><strong>Spacing</strong></b>
            <br />
            Use row to row spacing of 22.5 cm. In case of delay sowing, use
            spacing of 18-20 cm.
            <br />
            <b>
            <strong>
              &nbsp;
              <br />
              Sowing Depth
            </strong>
            </b>
            <br />
            Use depth of 3-5 cm for crop under irrigated conditions and 5-8
            cm depth for rainfed conditions.
            <br />
            <br />
            <b><strong>Method of Sowing </strong></b>
            <br />
            For sowing use broadcasting and seed drill method.
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
            Under irrigated conditions, use seed rate of 35 kg/acre and for
            rainfed conditions, use seed rate of 45 kg/acre.
            <br />
            <br />
            <b><strong>Seed Treatment</strong></b>
            <br />
            To enhance the yield growth seeds should be treated with
            Bavistin@2 gm/kg to protect it from smut disease. It can be
            treated with Vitavax @2.5 gm/kg to prevent it from covered smut
            disease. To make seed termites free it should be treated with
            250 ml Formothion in 5.3 ltr of water.
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
            In initial stage of crop, weed control is necessary to obtained
            good crop growth along with good yield. Broad and narrow leaves
            are two major weeds in barley. To control broad leaf weed, apply
            post emergence weedicide 2,4-D@250 gm/100 Ltr of water per acre,
            30-35 days after sowing. To control narrow leaf weeds use
            Isoproturon 75%WP@500 gm/100 Ltr of water or Pendimethalin 30%
            EC@1.4 Ltr/100 ltr water for one acre.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Barley;
