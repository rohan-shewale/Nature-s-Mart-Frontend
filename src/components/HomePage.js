import '../assets/css/homepage.css';
import schemes from '../assets/images/Government-Schemes.jpg';
import mandirate from '../assets/images/mandirate.jpg';
import crops from '../assets/images/crops.jpg';
import buysell from '../assets/images/buy&sell.jpg';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import productImage from '../assets/images/productImage.png';
import PopularBundle from './PopularBundle';

const HomePage = () => {
    return (
        // <div className="homePageDiv">
        //     <Banner />
        //     <div className="container first">
        //         <div className="row">
        //             <div className="col-md-1">

        //             </div>
        //             <div className="col-md-10">
        //                 <div className="mainDiv">
        //                     <div className="container second">
        //                         <div className="row">
        //                             <div className="col-md-6 border-right">
        //                                 <div className='exclusives'>
        //                                     EXLUSIVES
        //                                 </div>
        //                                 <div className="container third">
        //                                     <div className="row row1">

        //                                         <div className="col-md-5 buysell" style={{ height: "200px"}}>
        //                                             {/* <a href='#'>Buy & Sell</a> */}
        //                                             <img src={buysell}></img>
        //                                         </div>

        //                                         <div className='col-md-1'>

        //                                         </div>

        //                                         <div className="col-md-5 mandirate" style={{ height: "200px"}} >
        //                                             {/* <a href='#'>Mandi Rate</a> */}
        //                                             <img src={mandirate}></img>
        //                                         </div>

        //                                     </div>
        //                                     <div className="row row2">

        //                                         <div className="col-md-5 organic" style={{ height: "200px"}}>
        //                                             {/* <a href='#'>Organic</a> */}
        //                                             <img src={crops}></img>
        //                                         </div>

        //                                         <div className='col-md-1'>

        //                                         </div>
        //                                         <div className="col-md-5 govt-schemes" style={{ height: "200px"}} >
        //                                             <img src={schemes}></img>
        //                                             {/* <a href='#'>Govt-Schemes</a> */}
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-md-6 border-down">
        //                                 <div className='latestNews'>
        //                                     LATEST NEWS
        //                                     <Link to={"/news"}><span className='view-right'>view all</span></Link>
        //                                 </div>
        //                                 <div className='newsDiv'>
        //                                     <div className='container news'>
        //                                         <div className='row news1'>
        //                                             <div className='col-md-4'>
        //                                                 <img src='https://static.toiimg.com/thumb/msid-92775530,width-1070,height-580,imgsize-147380,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' alt=''></img>
        //                                             </div>
        //                                             <div className='col-md-8'>
        //                                                 <a href='https://economictimes.indiatimes.com/news/economy/agriculture/centre-directs-nafed-nccf-to-buy-red-onion-from-farmers/articleshow/98484802.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst'><h4>Centre directs Nafed, NCCF to buy red onion from farmers</h4></a>
        //                                                 <h6>Date : 11-03-2023</h6>
        //                                             </div>
        //                                         </div>
        //                                         <div className='row news2'>
        //                                             <div className='col-md-4'>
        //                                                 <img src='https://kjmarathi.b-cdn.net/media/24341/capture.jpg' alt=''></img>
        //                                             </div>
        //                                             <div className='col-md-8'>
        //                                                 <a href='https://marathi.krishijagran.com/news/in-the-market-committees-of-the-state-the-farmers-will-get-shetkari-bhawan-for-stay-and-thali-for-food/'><h4>राज्यातील बाजार समितींत शेतकऱ्यांना मुक्कामासाठी शेतकरी भवन आणि जेवणासाठी थाळी मिळणार..</h4></a>
        //                                                 <h6>Date : 11-03-2023</h6>
        //                                             </div>
        //                                         </div>
        //                                         <div className='row news3'>
        //                                             <div className='col-md-4'>
        //                                                 <img src='https://kjmarathi.b-cdn.net/media/24393/capture.jpg' alt=''></img>
        //                                             </div>
        //                                             <div className='col-md-8'>
        //                                                 <a href='https://marathi.krishijagran.com/government-schemes/expansion-of-shetale-scheme-revival-of-watershed-shivar-know-the-budget/'><h4>
        //                                                     शेततळे योजनेचा विस्तार, जलयुक्त शिवारला संजीवनी, अर्थसंकल्प जाणून घ्या</h4></a>
        //                                                 <h6>Date : 11-03-2023</h6>
        //                                             </div>
        //                                         </div>
        //                                         <div className='row news4'>
        //                                             <div className='col-md-4'>
        //                                                 <img src='https://kj2bcdn.b-cdn.net/media/72207/whatsapp-image-2023-03-10-at-45622-pm.jpg' alt=''></img>
        //                                             </div>
        //                                             <div className='col-md-8'>
        //                                                 <a href='https://hindi.krishijagran.com/news/the-role-of-agricultural-scientists-is-important-in-building-a-new-india-by-2047-union-agriculture-minister-tomar/'><h4>भारतीय कृषि अनुसंधान परिषद सोसाइटी की 94वीं आम बैठक केंद्रीय कृषि मंत्री नरेंद्र सिंह तोमर की अध्यक्षता में संपन्न हुआ.</h4></a>
        //                                                 <h6>Date : 11-03-2023</h6>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-1">

        //             </div>
        //         </div>
        //     </div>
        //     <div className='container fourth'>
        //         <div className='row'>
        //             <div className='col-md-1'>

        //             </div>
        //             <div className='col-md-10'>
        //                 <div className='container fifth' style={{marginLeft:"150px"}}>
        //                     <div className='row'>
        //                         <div className='col-md-6 border-right'>
        //                             <div className='sale'>
        //                                 DEAL OF THE DAY
        //                                 <Link to={"/products"}><span className='view-right'>view all</span></Link>
        //                             </div>
        //                             <div className='todaySale'>
        //                                 <div className='container deals'>
        //                                     <div className='row deal1'>
        //                                         <div className='col-md-4'>
        //                                             <img src={productImage} alt=''></img>
        //                                         </div>
        //                                         <div className='col-md-8'>
        //                                             <a href=''><h4></h4></a>

        //                                         </div>
        //                                     </div>
        //                                     <div className='row deal2'>
        //                                         <div className='col-md-4'>
        //                                             <img src={productImage} alt=''></img>
        //                                         </div>
        //                                         <div className='col-md-8'>
        //                                             <a href=''><h4></h4></a>

        //                                         </div>
        //                                     </div>
        //                                     <div className='row deal3'>
        //                                         <div className='col-md-4'>
        //                                             <img src={productImage} alt=''></img>
        //                                         </div>
        //                                         <div className='col-md-8'>
        //                                             <a href=''><h4></h4></a>

        //                                         </div>
        //                                     </div>
        //                                     <div className='row deal4'>
        //                                         <div className='col-md-4'>
        //                                             <img src={productImage} alt=''></img>
        //                                         </div>
        //                                         <div className='col-md-8'>
        //                                             <a href=''><h4></h4></a>

        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </div>
        //                         <div className='col-md-6'>
        //                             <div className='mandiRate'>
        //                                 MANDI RATE
        //                                 <a href=''><span className='view-right'>view all</span></a>
        //                             </div>
        //                             <div className='todayRate'>
        //                                 <table className="table">
        //                                     <thead className="thead-dark">
        //                                         <tr>
        //                                             <th scope="col">Vegetable</th>
        //                                             {/* <th scope="col">District</th> */}
        //                                             <th scope="col">Market</th>
        //                                             <th scope="col">Min Price</th>
        //                                             <th scope="col">Max Price</th>
        //                                             <th scope="col">Unit</th>
        //                                         </tr>
        //                                     </thead>
        //                                     <tbody>
        //                                         <tr>
        //                                             <td>Onion</td>
        //                                             <td>Nashik</td>
        //                                             <td>200</td>
        //                                             <td>500</td>
        //                                             <td>Qui</td>
        //                                         </tr>
        //                                         <tr>
        //                                             <td>Chana </td>
        //                                             <td>Nashik</td>
        //                                             <td>3,000</td>
        //                                             <td>4,670</td>
        //                                             <td>Qui</td>
        //                                         </tr>
        //                                         <tr>
        //                                             <td>Pomengranate</td>
        //                                             <td>Nashik</td>
        //                                             <td>12</td>
        //                                             <td>135</td>
        //                                             <td>50 Kg</td>
        //                                         </tr>
        //                                     </tbody>
        //                                 </table>
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className='col-md-1'>

        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='homepage'>
            <Banner />
            <PopularBundle />
        </div>
    )
}

export default HomePage;