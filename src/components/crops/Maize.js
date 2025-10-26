import React from "react";
import "../../assets/css/barley.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import corn from "../../assets/images/corn.jpg";
import corn1 from "../../assets/images/corn1.png";

const Maize = () => {
  return (
    // <div>
    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>Maize</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead">
    //             <div className="col-md-9 main-content page-header-image">
    //               <img
    //                 src={corn}
    //                 alt="corn"
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
    //             Maize (Zea mays L) is second rated grain used collectively in
    //             form of foodstuff or fodder. Globally, maize is known as queen
    //             of cereals because it has highest genetic yield potential among
    //             the cereals. Grains provides food items which are consumed in
    //             the form of starch, corn flakes also glucose. It is also used as
    //             animal feed in poultry. Maize can be cultivated in any soil as
    //             they require less fertile soil and various chemicals. Moreover,
    //             it fetch less ripening span, 3 months, in comparison to paddy,
    //             which takes 145 days. By growing maize, farmers can easily
    //             shield the deteriorating grade of soil , preserve 90% of water
    //             and 70% of potency as compared with paddy and can make more
    //             profit than wheat and paddy,” reported by vice chancellor,
    //             Punjab Agricultural University, Ludhiana. It serves as basic raw
    //             material to thousands of industrial products like oil, starch,
    //             alcoholic beverages etc. Uttar Pradesh, Rajasthan, Madhya
    //             Pradesh, Bihar, Himachal Pradesh, J & K and Punjab are major
    //             maize growing states. AP and Karnataka is major producer of
    //             maize in south.
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
    //           <div className="col-md-9 main-content page-header-image">
    //               <img
    //                 src={corn1}
    //                 alt="corn1"
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
    //           <h4>Soil</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Fertile well-drained alluvial or simply red loams free of coarse
    //             elements and full off nitrogen are ideal soils for maize
    //             cultivation. Maize can be grown on wide range of soils including
    //             loamy sand to clay loam. Definitely depleted plains are
    //             effective suited to the cultivation, even though it grows up in
    //             various hilly zones equally. Soils with fine organic matter
    //             containing good water holding capacity with pH ranging from
    //             5.5-7.5 are required to increase yield. Heavy clay soil is not
    //             suitable for cultivation. Soil test is necessary to know
    //             deficiency of any nutrient in the soil.
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
    //             <p>
    //               <b>PMH 1</b>: Applicable for cultivation throughout the state,
    //               under irrigated conditions for kharif/spring and summer
    //               season. It is long duration varieties, matures in 95 days.
    //               Stem is sturdy and of purple color. Average yield is about 21
    //               qtl/acre.
    //             </p>

    //             <p>
    //               <b>Prabhat</b>: Long duration variety. Cultivated throughout
    //               the state under irrigated conditions kharif, spring and summer
    //               season. It is medium tall plant with medium thick stem and
    //               resistant to lodging. Matures in 95 days. Average yield is
    //               17.5 qtl/acre.
    //             </p>

    //             <p>
    //               <b>Kesri</b>: Medium duration variety, Matures in 85 days.
    //               Grains are of orange color. Gives average yield of 16
    //               qtl/acre.
    //             </p>

    //             <p>
    //               <b>PMH-2</b>: Short duration variety, mature in 83 days.
    //               Cultivated under rainfed as well as under irrigated
    //               conditions. This hybrid is tolerant to drought. Ears are
    //               medium long with orange flint grains. Average yield is about
    //               16.5 qtl/acre.
    //             </p>

    //             <p>
    //               <b>JH 3459</b>: Short duration variety, mature in 84 days. It
    //               is tolerant to drought and lodging. It has orange flint grains
    //               with average yield of 17.5 qtl/acre.
    //             </p>

    //             <p>
    //               <b>Prakash</b>: It is drought tolerant early maturing (82
    //               days) hybrid. It gives average yield of 15-17 qtl/acre.
    //             </p>

    //             <p>
    //               <b>Megha</b>: Short duration variety, mature in 82 days. It
    //               has yellow- orange flint grains. It gives average yield of 12
    //               qtl/acre.
    //             </p>

    //             <p>
    //               <b>Punjab sathi</b>: Matures in 70 days, it is a short
    //               duration summer season variety. Tolerant to heat. Average
    //               yield is about 9qtl/acre.
    //             </p>

    //             <p>
    //               <b>Pearl Popcorn</b>: Applicable for cultivation throughout
    //               the state, under irrigated conditions. It is composite variety
    //               of popcorn. It has medium plant height. Ears are thin,
    //               cylindrical with small round flint grains, Matures in 88 days.
    //               Average yield is 12 qtl/acre.
    //             </p>

    //             <p>
    //               <b>Punjab sweet corn</b>: This variety is highly suitable for
    //               sweet corn on commercial basis. Because of its developing and
    //               immature grains in green ears possess high sugar content.
    //               Matures in 95-100 days. Its green ears average yield is 50
    //               qtl/acre.
    //             </p>

    //             <p>
    //               <b>HQPM-1 Hybrid</b>: Developed by Punjab Agricultural
    //               University, Ludhiana. Tolerant to major diseases, average mean
    //               yield of this variety is 2697 kg/acre.
    //             </p>

    //             <p>
    //               <b>J 1006</b>: Developed by PAU, Ludhiana and released in 1992
    //               for cultivation in Punjab. It is resistant to Maydis blight,
    //               brown striped downy mildew and stem borer.
    //             </p>

    //             <p>
    //               <b>Pratap Makka Chari 6</b>: Developed by MPUA&T, Udaipur. It
    //               is a medium tall variety, stem is strong, medium thick and
    //               resists lodging. It matures in 90–95 days. Its green fodder
    //               yield potential is 187–200 qtl/acre.
    //             </p>
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

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
    //             For cultivation selected land should be free from weeds and
    //             remains of previously grown crop. Plough the land to bring the
    //             soil to fine tilth. It may take 6 to 7 plough. Apply 4-6
    //             tons/acre of well decomposed cow dung across the field, also
    //             apply 10 Azospirillum packets in field. Prepared furrow and
    //             ridges with 45 cm to 50 cm spacing.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   {/* ******************************************************************************************* */}
    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header ">
    //           <h4>SOWING</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             <p></p>
    //             Time of sowing
    //             <br />
    //             In kharif season, crop is sown in month of May end to June
    //             corresponding with the onset of monsoon. Spring crops are sown
    //             during late February to end of march. Plantation of baby corn
    //             can be done all the year round, except December and January.
    //             Kharif and rabi season are best for sweet corn sowing.
    //             <p></p>
    //             Spacing <br />
    //             To obtain higher yield along with resource-use efficiency,
    //             optimum plant spacing is the key factor. 1) For kharif maize :
    //             use spacing of 60x20 cm. 2) Sweet corn : use spacing of 60x20 cm
    //             spacing. 3) Baby corn: Use 60x20 cm or 60x15 cm spacing. 4) Pop
    //             corn: Use 50x15 cm spacing. 5) Fodder: use spacing of 30x10 cm
    //             spacing
    //             <p></p>
    //             Sowing Depth <br />
    //             Seed should be sown at depth of 3-4 cm. For sweet corn
    //             cultivation keep depth of sowing to 2.5 cm.
    //             <p></p>
    //             Method of sowing <br />
    //             Sowing can be done manually by dibbling seeds or by mechanically
    //             with help of tractor drawn ridger seed drill.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

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
    //             <br></br>
    //             Purpose, seed size, season, plant type, sowing method these
    //             factor affect seed rate. 1) For kharif maize : use seed rate of
    //             8-10 kg/acre, 2) Sweet corn : use seed rate of 8 kg/acre 3) Baby
    //             corn: 16 kg/acre seed rate. 4) Pop corn: 7 kg/acre seed rate. 5)
    //             Fodder: 20 kg/acre seed rate. Intercropping: Pea can be taken as
    //             intercrop in maize plant. For that take one row of pea between
    //             maize crops. In autumn sugarcane and maize can also be
    //             intercropped. Sow one row of maize plant after two row of
    //             sugarcane.
    //             <p></p>
    //             <strong>Seed Treatment</strong>
    //             <br></br>
    //             To protect seeds from soil borne diseases and insect pest, seed
    //             treatment is necessary. To protect seeds from downy mildew,
    //             treat the seed with Carbendazim or Thiram@2gm/kg of seeds. After
    //             chemical treatment, treat seed with Azospirillum@600gm+ rice
    //             gruel. After treatment shade dry seeds for 15-20 minutes.
    //             Azosprillum helps in fixing of atmospheric nitrogen in the soil.
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
    //             Weeds are the serious problem in maize, particularly during
    //             kharif/monsoon season they competes with maize for nutrient and
    //             causes yield loss upto 35%. Therefore, timely weed management is
    //             needed for achieving higher yield. Take atleast one or two hand
    //             weeding in maize crop. First 20-25 days after sowing and second
    //             when on 40-45 days after sowing. If weed infestation is high,
    //             spray with Atrazine @500gm per 200 Ltr of water. After weeding,
    //             apply fertilizer as top dressing and carry out earthing up
    //             operation.
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
    //           <h4>IRRIGATION</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Apply irrigation immediately after sowing. Based upon soil type,
    //             on third or fourth day give lifesaving irrigation. In rainy
    //             season, if rain is satisfactory then it is not needed. Avoid
    //             water stagnation in early phase of crop and provide good
    //             drainage facility. Crop required less irrigation during early
    //             stage, 20 to 30 days after sowing afterwards it required
    //             irrigation once in a week. Seedling, knee height stage,
    //             flowering and grain feeling are the most sensitive stage for
    //             irrigation. Water stress at this stage cause huge loss in yield.
    //             In case of water scarcity, irrigate alternate furrow. It will
    //             save water also.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* ******************************************************************************************* */}

    //   {/* main div */}
    // </div>

    <main className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="col-sm-6 col-md-4">
          <h2 style={{ color: "rgb(52, 131, 52)", marginTop: "-80px" }}>MAIZE</h2>
          <div className="zoom-effect">
            { /* image */}
            <img className="img-fluid shadow" src="https://images.unsplash.com/photo-1634467524884-897d0af5e104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
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
            Maize (Zea mays L) is second rated grain used collectively in
            form of foodstuff or fodder. Globally, maize is known as queen
            of cereals because it has highest genetic yield potential among
            the cereals. Grains provides food items which are consumed in
            the form of starch, corn flakes also glucose. It is also used as
            animal feed in poultry. Maize can be cultivated in any soil as
            they require less fertile soil and various chemicals. Moreover,
            it fetch less ripening span, 3 months, in comparison to paddy,
            which takes 145 days. By growing maize, farmers can easily
            shield the deteriorating grade of soil , preserve 90% of water
            and 70% of potency as compared with paddy and can make more
            profit than wheat and paddy,” reported by vice chancellor,
            Punjab Agricultural University, Ludhiana. It serves as basic raw
            material to thousands of industrial products like oil, starch,
            alcoholic beverages etc. Uttar Pradesh, Rajasthan, Madhya
            Pradesh, Bihar, Himachal Pradesh, J & K and Punjab are major
            maize growing states. AP and Karnataka is major producer of
            maize in south.
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
            src={corn1}
            alt="corn1"
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
            Fertile well-drained alluvial or simply red loams free of coarse
            elements and full off nitrogen are ideal soils for maize
            cultivation. Maize can be grown on wide range of soils including
            loamy sand to clay loam. Definitely depleted plains are
            effective suited to the cultivation, even though it grows up in
            various hilly zones equally. Soils with fine organic matter
            containing good water holding capacity with pH ranging from
            5.5-7.5 are required to increase yield. Heavy clay soil is not
            suitable for cultivation. Soil test is necessary to know
            deficiency of any nutrient in the soil.
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
            <b><strong>PMH 1:</strong></b> Applicable for cultivation throughout the state,
            under irrigated conditions for kharif/spring and summer
            season. It is long duration varieties, matures in 95 days.
            Stem is sturdy and of purple color. Average yield is about 21
            qtl/acre.
            <br />
            <b>
              <strong>
                <br />
                Prabhat:
              </strong>
            </b>
            Long duration variety. Cultivated throughout
            the state under irrigated conditions kharif, spring and summer
            season. It is medium tall plant with medium thick stem and
            resistant to lodging. Matures in 95 days. Average yield is
            17.5 qtl/acre.
            <br />
            <br />
            <b><strong>Kesri:</strong></b>  Medium duration variety, Matures in 85 days.
            Grains are of orange color. Gives average yield of 16
            qtl/acre. <br />
            <br />
            <b><strong>PMH-2:</strong></b> Short duration variety, mature in 83 days.
            Cultivated under rainfed as well as under irrigated
            conditions. This hybrid is tolerant to drought. Ears are
            medium long with orange flint grains. Average yield is about
            16.5 qtl/acre. <br />
            <b>
              <strong>
                <br />
                JH 3459:
              </strong>
            </b>
            Short duration variety, mature in 84 days. It
            is tolerant to drought and lodging. It has orange flint grains
            with average yield of 17.5 qtl/acre.
            <br />
            <b>
              <strong>
                <br />
                Prakash:
              </strong>
            </b>
            It is drought tolerant early maturing (82
            days) hybrid. It gives average yield of 15-17 qtl/acre. <br />
            <br />
            <b><strong>Megha:</strong></b> Short duration variety, mature in 82 days. It
            has yellow- orange flint grains. It gives average yield of 12
            qtl/acre. <br />
            <br />
            <b><strong>Punjab sathi:</strong></b> Matures in 70 days, it is a short
            duration summer season variety. Tolerant to heat. Average
            yield is about 9qtl/acre.
            <br />
            <b><strong>Pearl Popcorn:</strong></b> Applicable for cultivation throughout
            the state, under irrigated conditions. It is composite variety
            of popcorn. It has medium plant height. Ears are thin,
            cylindrical with small round flint grains, Matures in 88 days.
            Average yield is 12 qtl/acre.
            <br />

            <b><strong>Punjab sweet corn:</strong></b> This variety is highly suitable for
            sweet corn on commercial basis. Because of its developing and
            immature grains in green ears possess high sugar content.
            Matures in 95-100 days. Its green ears average yield is 50
            qtl/acre.
            <br />

            <b><strong>Pearl Popcorn:</strong></b>  Applicable for cultivation throughout
            the state, under irrigated conditions. It is composite variety
            of popcorn. It has medium plant height. Ears are thin,
            cylindrical with small round flint grains, Matures in 88 days.
            Average yield is 12 qtl/acre.
            <br />

            <b><strong>HQPM-1 Hybrid:</strong></b> Developed by Punjab Agricultural
            University, Ludhiana. Tolerant to major diseases, average mean
            yield of this variety is 2697 kg/acre.
            <br />

            <b><strong>J 1006:</strong></b> Developed by PAU, Ludhiana and released in 1992
            for cultivation in Punjab. It is resistant to Maydis blight,
            brown striped downy mildew and stem borer.
            <br />

            <b><strong>Pratap Makka Chari 6:</strong></b> Developed by MPUA&T, Udaipur. It
            is a medium tall variety, stem is strong, medium thick and
            resists lodging. It matures in 90–95 days. Its green fodder
            yield potential is 187–200 qtl/acre.
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
            For cultivation selected land should be free from weeds and
            remains of previously grown crop. Plough the land to bring the
            soil to fine tilth. It may take 6 to 7 plough. Apply 4-6
            tons/acre of well decomposed cow dung across the field, also
            apply 10 Azospirillum packets in field. Prepared furrow and
            ridges with 45 cm to 50 cm spacing.
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
            In kharif season, crop is sown in month of May end to June
            corresponding with the onset of monsoon. Spring crops are sown
            during late February to end of march. Plantation of baby corn
            can be done all the year round, except December and January.
            Kharif and rabi season are best for sweet corn sowing. <br />
            <br />
            <b><strong>Spacing</strong></b>
            <br />
            To obtain higher yield along with resource-use efficiency,
            optimum plant spacing is the key factor. 1) For kharif maize :
            use spacing of 60x20 cm. 2) Sweet corn : use spacing of 60x20 cm
            spacing. 3) Baby corn: Use 60x20 cm or 60x15 cm spacing. 4) Pop
            corn: Use 50x15 cm spacing. 5) Fodder: use spacing of 30x10 cm
            spacing
            <br />
            <b>
              <strong>
                &nbsp;
                <br />
                Sowing Depth
              </strong>
            </b>
            <br />
            Seed should be sown at depth of 3-4 cm. For sweet corn
            cultivation keep depth of sowing to 2.5 cm.
            <br />
            <br />
            <b><strong>Method of Sowing </strong></b>
            <br />
            Sowing can be done manually by dibbling seeds or by mechanically
            with help of tractor drawn ridger seed drill.
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

export default Maize;
