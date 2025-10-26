import '../assets/css/banner.css';
import bannerImage from '../assets/images/banner.jpg';


const Banner = () => {
    return (
        <div>
            <main>
                { /* CAROUSEL */}
                <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src="https://www.apnikheti.com/images/banner.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/flower%20final.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/vegetables%20final.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                { /* COUPON */}
                <div>
                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/couponfinal.jpg" style={{ width: "100%", borderRadius: 15, marginTop: 5 }} alt="USE CUPON" />
                </div>
            </main>
        </div>
    )
}

export default Banner;