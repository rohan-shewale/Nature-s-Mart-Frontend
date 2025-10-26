import React from "react";
import "../../assets/css/barley.css";
import rice1 from "../../assets/images/rice1.png";

const Rice = () => {
    return (

        <main className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
                <div className="col-sm-6 col-md-4">
                    <h2 style={{ color: "rgb(52, 131, 52)", marginTop: "-80px" }}>RICE</h2>
                    <div className="zoom-effect">
                        { /* image */}
                        <img className="img-fluid shadow" src="https://c0.wallpaperflare.com/preview/674/919/828/rice-rice-seeds-agriculture-harvesting.jpg" alt="" />
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
                        Rice is the most important food crop of India covering about one-fourth of the total cropped area and providing food to about half of the Indian population. Punjab has made tremendous progress in rice productivity and production during the past 45 years. Due to use of high yielding varieties and new technology Punjab has given the title of "Rice Bowl of India".
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
                        src={rice1}
                        alt="rice"
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
                        It can be grown on a variety of soils with low permeability and pH varying from 5.0 to 9.5. Sandy loam to loamy sand to silty loam to clay loams, silty to clayey loam soils with low permeability, free of water logging and sodicity are considered best for paddy cultivation.
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
                        <b><strong>PR 128:</strong></b> PR 128 of rice is an improved version of PAU 201. It possesses long slender clear translucent grains. Its average plant height is 110 cm and matures in about 111 days after transplanting. It is resistant to all the 10 presently prevalent pathotypes of bacterial blight pathogen in the Punjab state. Its average paddy yield is 30.5 quintals per acre.
                        <br />
                        <b>
                            <strong>
                                <br />
                                PR 129:
                            </strong>
                        </b>
                        PR 129 of rice is an improved version of PAU 201. It possesses long slender clear translucent grains. Its average plant height is 105 cm and matures in about 108 days after transplanting. It is resistant to all the 10 presently prevalent pathotypes of bacterial blight pathogen in the Punjab state. Its average paddy yield is 30.0 quintals per acre.It matures in 124 days. It gives average
                        yield of 14 qtl/acre.
                        <br />
                        <br />
                        <b><strong>PR 111: </strong></b> It is short-statured, stiff strewed variety and it leave are erect and dark green in color. It matures in 135 days. Its grains are long, slender and clear. It is resistant bacterial leaf blight disease and gives average yield of 27 qtl/acre.<br />
                        <br />
                        <b><strong>PR 113:</strong></b>  It is short-statured, stiff strewed variety and its leave is erect and dark green in color. It matures in 142 days. Grain is bold and heavy. It is resistant bacterial leaf blight disease and gives average yield of 28 qtl/acre. <br />
                        <b>
                            <strong>
                                <br />
                                PR 114:
                            </strong>
                        </b>
                        It is semi-dwarf, stiff strewed variety having narrow, dark green erect leaves. It matures in 145 days. Its grains are extra-long, clear translucent grains with very good cooking quality. It gives average yield of 27.5 qtl/acre"
                        <br />
                        <b>
                            <strong>
                                <br />
                                PR 115:
                            </strong>
                        </b>
                        It is semi-dwarf, stiff strewed variety having narrow, dark green erect leaves. It matures in 125 days. Its grains are long slender, translucent with good cooking quality. It gives average yield of 25 qtl/acre. <br />
                        <br />
                        <b><strong>PR 116</strong></b> It is semi-dwarf, stiff strewed variety. It show resistant to lodging. Its leaves are light green and erect. It matures in 144 days. Its grains are long, slender and translucent. Its average yield is 28 quintals/acre. <br />
                        <br />
                        <b><strong>PR 118:</strong></b> It is a semi-dwarf, stiff strewed and lodging tolerant variety. Its leaves are dark green and leaves are erected. It matures in 158 days. Its grains are medium slender with good cooking quality. Its average yield is 29 qtl/acre.
                        <br />
                        <br />
                        <b>
                            <strong>Other States Variety</strong>
                        </b>
                        <br />
                        <br />
                        <b><strong>Hybrid 6201: </strong></b> Suitable for irrigated areas. It give resistance to blast. It gives average yield of 25 qtl/acre.
                        <br />
                        <br />
                        <b><strong>Vivek Dhan 62:</strong></b> Suitable for hilly and irrigated areas. Its grains are short bold. It gives resistant to blast. Neck blast and it can survive in low temperature areas. It give average yield of 19 qtl/acre.
                        <br />
                        <br />
                        <b><strong>Karnataka Rice Hybrid 2:</strong></b> Suitable for irrigated and timely sown areas. It is tolerant to leaf blight and other disease. It gives average yield of 35 qtl/acre.
                        <br />
                        <br />
                        <b><strong>Ratnagiri 1 and 2:</strong></b> Ratnagiri one suitable for irrigated areas while Ratnagiri 2 suitable for low land areas. These are semi dwarf varieties and give average yield of 19 qtl/acre and 21 qtl/acre respectively.
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
                        After harvesting of wheat grow dhaincha (seed rate 20 kg/acre) or sunhemp @ 20 kg/acre or cowpea @ 12 kg/acre up to first week of May. When crop is of 6-8 week old, bury them into the soil one day before transplanting of paddy. It will save 25 kg of N per acre. Use laser land leveler for land levelling. After then puddle soil and to obtained fine well levelled puddle field to reduce water loss through percolation.
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
                        20 may to 5 june is the optimum time for sowing  <br />
                        <br />
                        <b><strong>Spacing</strong></b>
                        <br />
                        For normal sown crop a spacing of 20 - 22.5 cm between rows is recommended. When sowing is delayed a closer spacing of 15-18 cm should be adopted.
                        <br />
                        <b>
                            <strong>
                                &nbsp;
                                <br />
                                Sowing Depth
                            </strong>
                        </b>
                        <br />
                        The seedlings should be transplanted at 2 to 3 cm depth. Shallow planting gives better yields.
                        <br />
                        <br />
                        <b><strong>Method of Sowing </strong></b>
                        <br />
                        Broadcasting method
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
                        8kg seeds are sufficient for planting in one acre land.
                        <br />
                        <br />
                        <b><strong>Seed Treatment</strong></b>
                        <br />
                        Before sowing, soak them in 10 Ltr water containing, Carbendazim@20gm+ Streptocycline@1gm for 8 to 10 hour before sowing. After then dry seeds in shade. And then use for sowing.
                        Also you can use below mention fungicides to protect crop from root rot disease. Use chemical fungicides first then treat seed with Trichoderma.


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
                        Use Butachlor 50 EC @ 1200 ml/acre or Thiobencarb 50 EC @ 1200 ml or Pendimethalin 30 EC @ 1000 ml or Pretilachlor 50 EC @ 600 ml per acre as pre-emergence herbicides, 2 to 3 days after transplanting. Mix any one of these herbicides in 60 kg of sand per acre and broadcast uniformly in 4-5 cm deep standing water.

                        For broadleaf weed control, apply Metsulfuron 20 WP @ 30 gm/acre in 150 Ltr water as post emergence, 20-25 days after transplanting. Before spray, drained out the standing water from the field and apply irrigation one day after spray.


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
                        Keep field flooded up to two weeks after transplanting. When all water gets infiltrated two day after apply irrigation in field. Depth of standing water should not exceed 10 cm. While doing intercultural and weeding operation, drain out excess water from field and irrigate field after completion of this operations. Stop irrigation about a fortnight before maturity to facilitate easy harvesting.


                    </p>
                </div>
            </div>
        </main>
    );
};

export default Rice;