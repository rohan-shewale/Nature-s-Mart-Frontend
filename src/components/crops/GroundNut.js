import React from "react";
import "../../assets/css/barley.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import barley from "../../assets/images/barley.jpg";
import barley1 from "../../assets/images/barley1.png";
import groundnut from "../../assets/images/groundnut.jpg";
import groundnut1 from "../../assets/images/groundnut1.png";
const GroundNut = () => {
  return (
    // <div>
    //   <div className="container">
    //     <div className="col-md-9 ">
    //       <section className="main-content">
    //         <header className="page-header">
    //           <h4>GroundNut</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead">
    //             <div className="col-md-9 main-content page-header-image">
    //               <img
    //                 src={groundnut}
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
    //             Groundnut is a significant oilseed, ideal for cultivation in
    //             tropic regions of the country. Groundnut (Arachis hypogaea), is
    //             a species in the legume or "bean" family. It is considered to be
    //             local in South America. These are known by many other local
    //             names such as earthnuts, ground nuts, goober peas, monkey nuts,
    //             pygmy nuts and peanuts. Despite its name and appearance, the
    //             peanut is not a nut, but rather a legume.
    //             <p></p>
    //             Groundnut is the third most important oilseed of world. In
    //             India, it is available throughout the year. It is important
    //             source of protein grown mostly under rain-fed conditions. In
    //             India, Uttar Pradesh, Madhya Pradesh, Rajasthan, Gujarat,
    //             Maharashtra, Karnataka, Andhra Pradesh and Tamil Nadu are major
    //             groundnut growing states.
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
    //                 src={groundnut1}
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
    //           <h4>SOIL</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Groundnut is raised in a sandy loam as well as well drained
    //             sandy clay loam soil. Deep well- drained soil with pH of 6.5 -7
    //             as well as having great fertility are perfect for groundnut
    //             cultivation. Spanish as well as Runner varieties are beneficial
    //             for good quality soil compared to the Virginia forms. The lack
    //             of pods is often rich in heavier grounds. An excellent climatic
    //             condition for better germination of groundnut is 31° C. Heavy
    //             and stiff clays are unsuitable for groundnut cultivation as the
    //             pod development is hampered in these soils.
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
    //               <strong>TG37A: </strong>The variety is suitable for spring
    //               season. The shelling out turn is 65% and the average weight of
    //               100 kernels are 42.5gm. The kernels are spherical in shape and
    //               pink in color. It gives an average yield of 12.3qtl/acre of
    //               pods.
    //             </p>
    //             <p>
    //               <strong>PG-1: </strong>It is a spreading variety recommended
    //               for cultivation under rain fed conditions in Punjab. Ready to
    //               harvest in 130 days. It has a shelling percentage of 69. It
    //               yields about 6-8 quintals per acre. Seeds contain 49 per cent
    //               oil.
    //             </p>
    //             <p>
    //               <strong>C-501 (Virginia group): </strong>It is a
    //               semi-spreading variety recommended for cultivation in sandy
    //               loam and loamy soils under irrigated conditions where
    //               spreading varieties do not grow well. It yields about 10
    //               quintals per acre. It matures in about 125-130 days. It has 68
    //               per cent shelling out turn and 48 percent oil content.
    //             </p>
    //             <p>
    //               <strong>M548:</strong> Grown in sandy areas of the place with
    //               certainly dispersed rain fall of about 550 mm in July,
    //               mid-august as well as September or simply under deterrent
    //               irrigation. Ready to harvest in 123 days. Crude oil content
    //               obtained is 52.4%.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>M-335: </strong>It is a spreading variety recommended
    //               for cultivation in Punjab. It matures in 125 days. It has a
    //               shelling percentage of 67. It yields about 8-10 quintals per
    //               acre. Seeds contain 49 percent oil. It is recommended for
    //               sowing under irrigated conditions in Punjab.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>M-522:</strong> It is a spreading variety for sowing
    //               under irrigated conditions in Punjab. It matures in about 115
    //               days. It has a shelling out turn of 68 percent. Seeds contain
    //               50.7 percent oil. Pods are medium bold in size with mostly two
    //               kernels. Its yield potential is 9 quintals per acre.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>M-37:</strong> Crop size is 25cm, a scattering kind
    //               variety with trailing divisions, foliage is big in dimensions,
    //               densely organized as well as deep greenish in shade. Pods are
    //               1 to 2 seeded hardly ever 3-seeded. Shelling is 69%.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>SG 99:</strong>&nbsp;This variety is grown in loamy
    //               sand to sandy places throughout summer months. Period of
    //               maturity is 124 days; principle stalk length is 66-68 cm;
    //               mature pods/plant is 22-24 in number; hundred kernel weights
    //               is 54; shelling out turn is 66%; oil content produced is 52.3.
    //               Average pod yield is about 10qtl/acre. Tolerant to bud
    //               necrosis disease. <br />
    //               &nbsp;
    //               <br />
    //               <strong>SG-84:</strong> It is a bunch type variety suitable
    //               for growing in Punjab. It matures in 120-130 days. Seeds are
    //               of light brown color and contain 50 percent oil. It has a
    //               shelling out turn of 64 percent. Its yield potential is 10
    //               quintals per acre.
    //             </p>
    //             <p>
    //               <strong>Moongphali No. 13:</strong> It is a spreading variety
    //               with profuse lateral branches and vigorous growth. It is
    //               recommended for cultivation in sandy soils. It matures in
    //               125-135 days. Its yield potential is 10-12 quintals per acre.
    //               It has 68 percent, shelling out turn. Seeds are of bold size
    //               and contain 49 percent oil.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>M-145:</strong> A semi growing kind. Ideal for
    //               cultivation under irrigated as well as rain fed situations.
    //               Foliage is light greenish. Pods 1-4 seeded with purple tinted
    //               kernels. Shelling is 77%. Hundred kernels weight about 51gm.
    //               Proteins amount contains 29 .4%. It matures within 125 days.
    //               <br />
    //               <strong>
    //                 &nbsp;
    //                 <br />
    //                 M-197:
    //               </strong>{" "}
    //               It is a semi spreading variety recommended for cultivation in
    //               Punjab. It matures in 118-120 days. It has a shelling
    //               percentage of 68. It yields about 7-9 quintals per acre. Seeds
    //               contain 51 percent oil.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>ICGS1:</strong> High yielding Spanish bunch type
    //               variety. Mature in 112 days. Resistant to bud necrosis
    //               disease. 70% shelling turn over and 51% oil content.
    //             </p>
    //             <p>
    //               <strong>AL 882</strong>: It is a dwarf and early maturing
    //               variety. It gives an average yield of 5.4qtl/acre.
    //             </p>
    //             <p>
    //               <strong>Other state varieties:</strong>
    //             </p>
    //             <p>
    //               <strong>GG 21</strong>: This variety is has bold kernel size
    //               and having attractive tan color. It is having higher pod
    //               yield. It is having average kernel yield of 490 kg/acre.
    //               <br />
    //               &nbsp;
    //               <br />
    //               <strong>GG 8</strong>: It give average yield of 690kg/acre
    //               which is 7-15%higher than TAG 24 and JL 24.
    //             </p>
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
    //             After harvesting of previous crop, plough the land twice and
    //             pulverised soil to obtained good tilth of soil. Give a third
    //             ploughing if necessary for rainfed crop, in the end of June or
    //             early July. Use harrow or tillers for cultivation purpose. When
    //             land is heavily infested with perennial weeds, very deep
    //             ploughing is needed. For irrigated crop, make beds of convenient
    //             size depending upon topography. Nature of irrigation source etc.
    //             Application of 5-7 ton/acre of chicken manure or 10 ton/acre of
    //             farm yard manure or well decomposed cow dung should be done 1
    //             month before sowing. It helps to improve soil structure along
    //             with good plant growth.
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
    //             <p>
    //               <strong>Time of sowing</strong>
    //               <br />
    //               Sow the rainfed crop with the advent of monsoon in the last
    //               week of June or in the Ist week of July. Complete sowing as
    //               early as possible as delay sowing results in reduction in
    //               yield. Where irrigation facility is available sow kharif
    //               groundnut from April end to May end. &nbsp;
    //             </p>
    //             <p>
    //               <br />
    //               <strong>Spacing</strong>
    //               <br />
    //               Spacing to be adopted is depends upon type of variety. i.e.,
    //               for semi spreading variety (M 522) use spacing of 30cm between
    //               the rows and 22.5 cm between plants and for bunchy type
    //               varieties (SG 99, SG84) use spacing of 30x15 cm. <br />
    //               <br />
    //               <strong>Sowing Depth</strong>
    //               <br />
    //               Healthy and well developed pods should be hand shelled with a
    //               suitable groundnut sheer about fornight before sowing. Pods
    //               are sown with help of seed drill at depth of 8-10 cm at a seed
    //               rate of 38-40 kg/acre. <br />
    //               <br />
    //               <strong>Method of sowing</strong>
    //               <br />
    //               seeds are sown with help of seed drill.
    //               <br />
    //               <br />
    //               <strong>ICRISAT method:</strong> Polythene mulching has been
    //               attributed as one of the major improved cultivation practices
    //               for enhanced productivity of groundnut in China. When grown
    //               under polythene mulch system, groundnut matures about 10 days
    //               earlier than under non-mulched condition. Polythene mulching
    //               increases the soil temperature by retaining the heat from the
    //               sun. The increased accumulated temperature shortens the crop
    //               period. During the hot season it also protects the soil from
    //               direct sunlight.
    //               <br />
    //               <br />
    //               In this technology, Broad beds and furrows are used for
    //               groundnut cultivation. Environment of Broad beds and furrows
    //               system is favourable for the development of groundnut pods, by
    //               doing little modification in the size, beds are formed along
    //               with polyethylene film mulched. Make beds of 60 cm width and
    //               leave 15 cm on the either side for the furrows. In a plot size
    //               of 4.5 m x 6.0 m, five beds can be made. After the formation
    //               of the bed and fertilizer application, spread black polythene
    //               sheet (90 cm width) over the soil surface. Polyethylene sheet
    //               of Seven micron @20kg/acre is required. Holes can be made at
    //               required spacing of 30 x10 cm before spreading of the sheets.
    //               The seed requirement is similar to normal groundnut
    //               cultivation
    //             </p>
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
    //             <strong>Seeds Rate</strong>
    //             <br></br>
    //             For sowing use seed rate of 38-40kg/acre.
    //             <p></p>
    //             <strong>Seed Treatment</strong>
    //             <br></br>
    //             Use healthy and well developed kernels for sowing. Discard very
    //             small, shrivelled and diseased kernels. Carry out seed treatment
    //             with Thiram@5gm or Captan@2-3 gm/kg or Mancozeb@4g/kg or
    //             Carboxin or Carbendazim@2gm/kg of the kernels to avoid
    //             infestation from ground borne disease. After chemical treatment,
    //             treat the seeds with Trichoderma viride@4g/kg seed or
    //             Pseudomonas fluorescens@10gm/kg seed. Seed treatment will
    //             protect the young seedlings from root-rot and collar rot
    //             infection.
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
    //           <h4>ROTATION</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Groundnut-Late Kharif Fodder/Gobhi sarson+Toria
    //             /Potato/Peas/Toria/Rabi crops rotation can be taken up
    //             successfully where irrigation facilities exist. Avoid sowing
    //             groundnut in the same field year after year, as this practice
    //             results in heavy build- up of soil-borne diseases.
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
    //           <h4>FERTILIZER</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             Apply fertilizer dose depending upon Soil testing. Due to this
    //             exact amount of fertilizer needed for soil is given and thus
    //             unnecessary loss of fertilizer is avoided. Apply Urea@13kg/acre,
    //             SSP@50kg/acre and depending upon soil testing if soil show
    //             deficiencies of potash then apply 10kg/acre of MoP. Also apply
    //             Gypsum@50kg/acre. Broadcast gypsum and drill all fertilizers at
    //             time of sowing. Application of gypsum encourages pod formation
    //             and better filling up of the pods.
    //             <p></p>
    //             The leaves of upper portion of crop get smaller and it gives
    //             light yellow appearance, this is due to Zinc deficiency. Crop
    //             growth gets stunted and the kernels are shrivelled in severe
    //             condition. Apply zinc sulphate heptahydrate@25kg or zinc
    //             sulphate monohydrate@16kg per acre. This dose will be sufficient
    //             for 2 to 3 years.
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
    //           <h4>WATER SOLUABLE FERTILIZER</h4>
    //         </header>
    //         <div className="jumbotron">
    //           <h1 className="display-4"></h1>
    //           <p className="lead p-background">
    //             To improve pod filling spraying of nutrient solution is
    //             important. This can be prepared by soaking DAP@2.5 kg, Ammonium
    //             sulphate@1kg and Borax@500 gm in 37 lit of water overnight. The
    //             next day morning it can be filtered and about 16 litre of
    //             mixture can be obtained and it may be diluted with 234 lit of
    //             water so as to made up to 200 litre to spray for one acre.
    //             Planofix@4ml/15 ltr can also be mixed while spraying. This can
    //             be sprayed on 25th and 35th day after sowing.
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
    //             Weed control during first 45 days of growth period is essential
    //             for good yield. The most critical period is 3-6 weeks after
    //             sowing of crop. The average yield loss due to weed is about 30%
    //             whereas under poor management yield loss by weed may be 60%.
    //             Therefore carryout mechanical or chemical weed control during
    //             initial stage of crop growth.
    //             <br />
    //             Give two hoeing after the first three weeks of sowing and then
    //             after second three weeks of sowing. No interculture would be
    //             done after the pegs have commmenced going underground. Apply
    //             Fluchoralin @ 600 ml per acre or Pendimethalin @ 1 ltr per acre
    //             as pre-emergence area followed by hand weeding once 36-40 days
    //             after planting.
    //             <br />
    //             Accomplish earthing up during second hand weeding/late hand
    //             weeding (in herbicide application). It is an important operation
    //             in groundnut. Earthing up is to be done within 40-45 days after
    //             sowing as it helps for the penetration of pegs in the soil and
    //             also facilitates for increased pod development.
    //             <br />
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
    //             Irrigation for two or three time depending upon seasonal
    //             rainfall is necessary for good crop growth. Apply first
    //             irrigation at flowering stage. If the Kharif crop is caught in a
    //             long spell of draught, especially at the pod formation stage,
    //             supplemental irrigation is given, if water is available (In pod
    //             development stage, 2 - 3 irrigations are given depending on the
    //             soil type). Another irrigation a few days before the harvest may
    //             be given for full recovery for pods from soil.
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
          <h2 style={{ color: "rgb(52, 131, 52)", marginTop: "-80px" }}>GROUNDNUT</h2>
          <div className="zoom-effect">
            { /* image */}
            <img className="img-fluid shadow" src="https://media.istockphoto.com/id/1174867545/photo/farmer-woman-picking-peanuts-autumn-harvesting-farming-and-gardening-concept-organic-farm.jpg?s=612x612&w=0&k=20&c=-JZQgQIsZnXRPnrtqUIGacf9ylUwHSz_HvFDsblmcd8=" alt="" />
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
            Groundnut is a significant oilseed, ideal for cultivation in
            tropic regions of the country. Groundnut (Arachis hypogaea), is
            a species in the legume or "bean" family. It is considered to be
            local in South America. These are known by many other local
            names such as earthnuts, ground nuts, goober peas, monkey nuts,
            pygmy nuts and peanuts. Despite its name and appearance, the
            peanut is not a nut, but rather a legume.
            <p></p>
            Groundnut is the third most important oilseed of world. In
            India, it is available throughout the year. It is important
            source of protein grown mostly under rain-fed conditions. In
            India, Uttar Pradesh, Madhya Pradesh, Rajasthan, Gujarat,
            Maharashtra, Karnataka, Andhra Pradesh and Tamil Nadu are major
            groundnut growing states.
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
            src={groundnut1}
            alt="groundnut1"
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
            Groundnut is raised in a sandy loam as well as well drained
            sandy clay loam soil. Deep well- drained soil with pH of 6.5 -7
            as well as having great fertility are perfect for groundnut
            cultivation. Spanish as well as Runner varieties are beneficial
            for good quality soil compared to the Virginia forms. The lack
            of pods is often rich in heavier grounds. An excellent climatic
            condition for better germination of groundnut is 31° C. Heavy
            and stiff clays are unsuitable for groundnut cultivation as the
            pod development is hampered in these soils.
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
            <b><strong>TG37A:</strong></b> The variety is suitable for spring
            season. The shelling out turn is 65% and the average weight of
            100 kernels are 42.5gm. The kernels are spherical in shape and
            pink in color. It gives an average yield of 12.3qtl/acre of
            pods.
            <br />
            <b>
              <strong>
                <br />
                PG-1:
              </strong>
            </b>
            It is a spreading variety recommended
            for cultivation under rain fed conditions in Punjab. Ready to
            harvest in 130 days. It has a shelling percentage of 69. It
            yields about 6-8 quintals per acre. Seeds contain 49 per cent
            oil.
            <br />
            <br />
            <b><strong>C-501 (Virginia group):</strong></b> It is a
            semi-spreading variety recommended for cultivation in sandy
            loam and loamy soils under irrigated conditions where
            spreading varieties do not grow well. It yields about 10
            quintals per acre. It matures in about 125-130 days. It has 68
            per cent shelling out turn and 48 percent oil content. <br />
            <br />
            <b><strong>M548::</strong></b> Grown in sandy areas of the place with
            certainly dispersed rain fall of about 550 mm in July,
            mid-august as well as September or simply under deterrent
            irrigation. Ready to harvest in 123 days. Crude oil content
            obtained is 52.4%. <br />
            <b>
              <strong>
                <br />
                M-335:
              </strong>
            </b>
            It is a spreading variety recommended
            for cultivation in Punjab. It matures in 125 days. It has a
            shelling percentage of 67. It yields about 8-10 quintals per
            acre. Seeds contain 49 percent oil. It is recommended for
            sowing under irrigated conditions in Punjab.
            <br />
            <b>
              <strong>
                <br />
                M-522:
              </strong>
            </b>
            It is a spreading variety for sowing
            under irrigated conditions in Punjab. It matures in about 115
            days. It has a shelling out turn of 68 percent. Seeds contain
            50.7 percent oil. Pods are medium bold in size with mostly two
            kernels. Its yield potential is 9 quintals per acre. <br />
            <br />
            <b><strong>M-37:</strong></b> Crop size is 25cm, a scattering kind
            variety with trailing divisions, foliage is big in dimensions,
            densely organized as well as deep greenish in shade. Pods are
            1 to 2 seeded hardly ever 3-seeded. Shelling is 69%.<br />
            <br />
            <b><strong>SG 99:</strong></b> &nbsp;This variety is grown in loamy
            sand to sandy places throughout summer months. Period of
            maturity is 124 days; principle stalk length is 66-68 cm;
            mature pods/plant is 22-24 in number; hundred kernel weights
            is 54; shelling out turn is 66%; oil content produced is 52.3.
            Average pod yield is about 10qtl/acre. Tolerant to bud
            necrosis disease.
            <br />

            <b><strong>SG-84:</strong></b> It is a bunch type variety suitable
            for growing in Punjab. It matures in 120-130 days. Seeds are
            of light brown color and contain 50 percent oil. It has a
            shelling out turn of 64 percent. Its yield potential is 10
            quintals per acre.<br />
            <br />

            <b><strong>Moongphali No. 13:</strong></b> It is a spreading variety
            with profuse lateral branches and vigorous growth. It is
            recommended for cultivation in sandy soils. It matures in
            125-135 days. Its yield potential is 10-12 quintals per acre.
            It has 68 percent, shelling out turn. Seeds are of bold size
            and contain 49 percent oil.<br />
            <br />

            <b><strong>M-145:</strong></b>A semi growing kind. Ideal for
            cultivation under irrigated as well as rain fed situations.
            Foliage is light greenish. Pods 1-4 seeded with purple tinted
            kernels. Shelling is 77%. Hundred kernels weight about 51gm.
            Proteins amount contains 29 .4%. It matures within 125 days.<br />
            <br />

            <b><strong> M-197:</strong></b>It is a semi spreading variety recommended for cultivation in
            Punjab. It matures in 118-120 days. It has a shelling
            percentage of 68. It yields about 7-9 quintals per acre. Seeds
            contain 51 percent oil.<br />
            <br />

            <b><strong>ICGS1:</strong></b>High yielding Spanish bunch type
            variety. Mature in 112 days. Resistant to bud necrosis
            disease. 70% shelling turn over and 51% oil content.<br />
            <br />

            <b><strong>AL 882</strong></b>It is a dwarf and early maturing
            variety. It gives an average yield of 5.4qtl/acre.<br />
            <br />
            <br />
            <b>
              <strong>Other States Variety</strong>
            </b>
            <br />
            <br />
            <b><strong>GG 21:</strong></b>This variety is has bold kernel size
            and having attractive tan color. It is having higher pod
            yield. It is having average kernel yield of 490 kg/acre.<br />
            <br />

            <br />
            <b><strong>GG 8:</strong></b>It give average yield of 690kg/acre
            which is 7-15%higher than TAG 24 and JL 24.<br />
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
            After harvesting of previous crop, plough the land twice and
            pulverised soil to obtained good tilth of soil. Give a third
            ploughing if necessary for rainfed crop, in the end of June or
            early July. Use harrow or tillers for cultivation purpose. When
            land is heavily infested with perennial weeds, very deep
            ploughing is needed. For irrigated crop, make beds of convenient
            size depending upon topography. Nature of irrigation source etc.
            Application of 5-7 ton/acre of chicken manure or 10 ton/acre of
            farm yard manure or well decomposed cow dung should be done 1
            month before sowing. It helps to improve soil structure along
            with good plant growth.
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
            Sow the rainfed crop with the advent of monsoon in the last
            week of June or in the Ist week of July. Complete sowing as
            early as possible as delay sowing results in reduction in
            yield. Where irrigation facility is available sow kharif
            groundnut from April end to May end. &nbsp; <br />
            <br />
            <b><strong>Spacing</strong></b>
            <br />
            Spacing to be adopted is depends upon type of variety. i.e.,
            for semi spreading variety (M 522) use spacing of 30cm between
            the rows and 22.5 cm between plants and for bunchy type
            varieties (SG 99, SG84) use spacing of 30x15 cm.
            <br />
            <b>
              <strong>
                &nbsp;
                <br />
                Sowing Depth
              </strong>
            </b>
            <br />
            Healthy and well developed pods should be hand shelled with a
            suitable groundnut sheer about fornight before sowing. Pods
            are sown with help of seed drill at depth of 8-10 cm at a seed
            rate of 38-40 kg/acre.
            <br />
            <br />
            <b><strong>Method of Sowing </strong></b>
            <br />
            seeds are sown with help of seed drill.
            <br />
            <strong>ICRISAT method:</strong> Polythene mulching has been
            attributed as one of the major improved cultivation practices
            for enhanced productivity of groundnut in China. When grown
            under polythene mulch system, groundnut matures about 10 days
            earlier than under non-mulched condition. Polythene mulching
            increases the soil temperature by retaining the heat from the
            sun. The increased accumulated temperature shortens the crop
            period. During the hot season it also protects the soil from
            direct sunlight.
            <br />
            <br />
            In this technology, Broad beds and furrows are used for
            groundnut cultivation. Environment of Broad beds and furrows
            system is favourable for the development of groundnut pods, by
            doing little modification in the size, beds are formed along
            with polyethylene film mulched. Make beds of 60 cm width and
            leave 15 cm on the either side for the furrows. In a plot size
            of 4.5 m x 6.0 m, five beds can be made. After the formation
            of the bed and fertilizer application, spread black polythene
            sheet (90 cm width) over the soil surface. Polyethylene sheet
            of Seven micron @20kg/acre is required. Holes can be made at
            required spacing of 30 x10 cm before spreading of the sheets.
            The seed requirement is similar to normal groundnut
            cultivation
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
            For sowing use seed rate of 38-40kg/acre.
            <br />
            <br />
            <b><strong>Seed Treatment</strong></b>
            <br />
            Use healthy and well developed kernels for sowing. Discard very
            small, shrivelled and diseased kernels. Carry out seed treatment
            with Thiram@5gm or Captan@2-3 gm/kg or Mancozeb@4g/kg or
            Carboxin or Carbendazim@2gm/kg of the kernels to avoid
            infestation from ground borne disease. After chemical treatment,
            treat the seeds with Trichoderma viride@4g/kg seed or
            Pseudomonas fluorescens@10gm/kg seed. Seed treatment will
            protect the young seedlings from root-rot and collar rot
            infection.
          </p>
        </div>
      </div>

      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            ROTATION
          </h2>
          <p className="lead para p-background">
            Groundnut-Late Kharif Fodder/Gobhi sarson+Toria
            /Potato/Peas/Toria/Rabi crops rotation can be taken up
            successfully where irrigation facilities exist. Avoid sowing
            groundnut in the same field year after year, as this practice
            results in heavy build- up of soil-borne diseases.
            <br />
          </p>
        </div>
      </div>


      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            FERTILIZER
          </h2>
          <p className="lead para p-background">
            Apply fertilizer dose depending upon Soil testing. Due to this
            exact amount of fertilizer needed for soil is given and thus
            unnecessary loss of fertilizer is avoided. Apply Urea@13kg/acre,
            SSP@50kg/acre and depending upon soil testing if soil show
            deficiencies of potash then apply 10kg/acre of MoP. Also apply
            Gypsum@50kg/acre. Broadcast gypsum and drill all fertilizers at
            time of sowing. Application of gypsum encourages pod formation
            and better filling up of the pods.
            <p></p>
            The leaves of upper portion of crop get smaller and it gives
            light yellow appearance, this is due to Zinc deficiency. Crop
            growth gets stunted and the kernels are shrivelled in severe
            condition. Apply zinc sulphate heptahydrate@25kg or zinc
            sulphate monohydrate@16kg per acre. This dose will be sufficient
            for 2 to 3 years.
            <br />
          </p>
        </div>
      </div>


      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
            WATER SOLUABLE FERTILIZER
          </h2>
          <p className="lead para p-background">
            To improve pod filling spraying of nutrient solution is
            important. This can be prepared by soaking DAP@2.5 kg, Ammonium
            sulphate@1kg and Borax@500 gm in 37 lit of water overnight. The
            next day morning it can be filtered and about 16 litre of
            mixture can be obtained and it may be diluted with 234 lit of
            water so as to made up to 200 litre to spray for one acre.
            Planofix@4ml/15 ltr can also be mixed while spraying. This can
            be sprayed on 25th and 35th day after sowing.
            <br />
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
            Weed control during first 45 days of growth period is essential
            for good yield. The most critical period is 3-6 weeks after
            sowing of crop. The average yield loss due to weed is about 30%
            whereas under poor management yield loss by weed may be 60%.
            Therefore carryout mechanical or chemical weed control during
            initial stage of crop growth.
            <br />
            Give two hoeing after the first three weeks of sowing and then
            after second three weeks of sowing. No interculture would be
            done after the pegs have commmenced going underground. Apply
            Fluchoralin @ 600 ml per acre or Pendimethalin @ 1 ltr per acre
            as pre-emergence area followed by hand weeding once 36-40 days
            after planting.
            <br />
            Accomplish earthing up during second hand weeding/late hand
            weeding (in herbicide application). It is an important operation
            in groundnut. Earthing up is to be done within 40-45 days after
            sowing as it helps for the penetration of pegs in the soil and
            also facilitates for increased pod development.
            <br />
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
            Irrigation for two or three time depending upon seasonal
            rainfall is necessary for good crop growth. Apply first
            irrigation at flowering stage. If the Kharif crop is caught in a
            long spell of draught, especially at the pod formation stage,
            supplemental irrigation is given, if water is available (In pod
            development stage, 2 - 3 irrigations are given depending on the
            soil type). Another irrigation a few days before the harvest may
            be given for full recovery for pods from soil.
            <br />
          </p>
        </div>
      </div>
    </main>
  );
};

export default GroundNut;
