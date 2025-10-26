import '../assets/css/homepage.css';


function ProductBox({price,quantity,packName}) {
  return (
    <div className="product-box">
      <img alt="pack" src="https://i.imgur.com/Zm8Xo2j.png" />
      <strong>{packName}</strong>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
   
      <a href="Shopping Cart HTML.html" className="cart-btn">
        <i className="fas fa-shopping-bag me-4"></i> Add to Cart
      </a>

      <a className="like-btn">
        <i className="far fa-heart"></i>
      </a>
    </div>
  );
}

const PopularBundle = () => {
  return (
    <section id="popular-bundle-pack">
      <div className="product-heading">
        <h3>Popular Bundle Pack</h3>
      </div>

      <div className="product-container">
        <ProductBox packName={"Big Bundle"} quantity={"tomato,potato,brocolli,+3.."} price={"Rs 900"}  />
        <ProductBox packName={"Small Bundle"} quantity={"tomato,potato,brocolli"} price={"Rs 300"} />
        <ProductBox packName={"Medium Bundle"} quantity={"tomato,potato,brocolli,+1.."} price={"600"} />
        <ProductBox packName={"Big Bundle"} quantity={"tomato,potato,brocolli,+3.."} price={"Rs 900"} />
        <ProductBox packName={"Big Bundle"} quantity={"tomato,potato,brocolli,+3.."} price={"Rs 900"} />
        <ProductBox packName={"Big Bundle"} quantity={"tomato,potato,brocolli,+3.."} price={"Rs 900"} />

      </div>
    </section>
  );
};

export default PopularBundle;
