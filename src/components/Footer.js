import '../assets/css/footer.css';
import logo from '../assets/images/cdac.jpg';
import '../assets/css/banner.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // <div className='footer'>
        //     <footer className="footer-section">
        //         <div className="container">
        //             <div className="footer-cta pt-5 pb-5">
        //                 <div className="row">
        //                     <div className="col-xl-4 col-md-4 mb-30">
        //                         <div className="single-cta">
        //                             <i className="fa fa-map-marker"></i>
        //                             <div className="cta-text">
        //                                 <h4>Find us</h4>
        //                                 <span>CDAC Kharghar, Mumbai 401107</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-4 col-md-4 mb-30">
        //                         <div className="single-cta">
        //                             <i className="fa fa-phone"></i>
        //                             <div className="cta-text">
        //                                 <h4>Call us</h4>
        //                                 <span>+91 9675501210</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-4 col-md-4 mb-30">
        //                         <div className="single-cta">
        //                             <i className="fa fa-envelope-open"></i>
        //                             <div className="cta-text">
        //                                 <h4>Mail us</h4>
        //                                 <span>naturesmart@gmail.com</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="footer-content pt-5 pb-5">
        //                 <div className="row">
        //                     <div className="col-xl-4 col-lg-4 mb-50">
        //                         <div className="footer-widget">
        //                             <div className="footer-logo">
        //                                 <a href="index.html"><img src={logo} className="img-fluid" alt="logo"></img></a>
        //                             </div>
        //                             <div className="footer-text">
        //                                 <p>CDAC Project on farming 2023</p>
        //                             </div>
        //                             <div className="footer-social-icon">
        //                                 <span>Follow us</span>
        //                                 <a href="#"><button type="button" className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook" style={{ height: "15px", width: "15px" }}></i></button></a>
        //                                 <a href="#"><button type="button" className="btn btn-social-icon btn-youtube"><i className="fa fa-youtube" style={{ height: "15px", width: "15px" }}></i></button></a>
        //                                 <a href="#"><button type="button" className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram" style={{ height: "15px", width: "15px" }}></i></button></a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
        //                         <div className="footer-widget">
        //                             <div className="footer-widget-heading">
        //                                 <h3>Useful Links</h3>
        //                             </div>
        //                             <ul>
        //                                 <li><Link to="/">Home</Link></li>
        //                                 <li><Link to="/crops">Crops</Link></li>
        //                                 <li><Link to="/products">Buy & Sell</Link></li>
        //                                 <li><Link to="/mandirate">Mandi Rate</Link></li>
        //                                 <li><Link to="/schemes">Govt-Schemes</Link></li>
        //                                 <li><Link to="/news">Latest News</Link></li>
                                        
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
        //                         <div className="footer-widget">
        //                             <div className="footer-widget-heading">
        //                                 <h3>Subscribe</h3>
        //                             </div>
        //                             <div className="footer-text mb-25">
        //                                 <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
        //                             </div>
        //                             <div className="subscribe-form">
        //                                 <form action="#">
        //                                     <input type="text" placeholder="Email Address"></input>
        //                                     <button><i className="fa fa-telegram"></i></button>
        //                                 </form>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="copyright-area">
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col-xl-12 col-lg-12 text-center">
        //                         <div className="copyright-text">
        //                             <p>Copyright &copy; 2023, All Right Reserved</p>
        //                         </div>
        //                     </div>
                            
        //                 </div>
        //             </div>
        //         </div>
        //     </footer>
        // </div>

        <footer>
      <div className="footer-container">
        {/* logo-container */}
        <div className="footer-logo">
          <a href="#">
            Natures Mart
          </a>
          {/* social */}
          <div className="footer-social">
            <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f fa-fw"></i>
            </a>
            <a href="https://twitter.com/?lang=en-in">
              <i className="fab fa-twitter fa-fw"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram fa-fw"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fab fa-youtube fa-fw"></i>
            </a>
          </div>
        </div>

    
        <div className="footer-links">
          <strong>Useful Links</strong>
          <ul>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <a href="/register">Sign Up</a>
            </li>
          </ul>
        </div>

     
        <div className="footer-links">
          <strong>Category</strong>
          <ul>
            <li>
              <a href="/crops">Crops</a>
            </li>
            <li>
              <a href="/mandiRate">Mandi Rate</a>
            </li>
          </ul>
        </div>

    
        <div className="footer-links">
          <strong>Contact</strong>
          <ul>
            <li>
              <a href="#">Phone : +123456789</a>
            </li>
            <li>
              <a href="#">Email : naturesmart@gmail.com</a>
            </li>
            <li>
              <a href="#">Cities we serve</a>
            </li>
          </ul>
          <br />
          <p style={{ color: "aliceblue" }}>
            Copyright ©2023 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer;