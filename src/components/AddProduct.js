
import "../assets/css/addproduct.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddProduct() {

  const [isvalid, setIsvalid] = useState(false);
  const [productInfo, setProductInfo] = useState({

    title: "",
    productImage: "",
    quantity: "",
    price: "",
    productRating: "",
    isForRent: "",
    category: "",

  });



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductInfo({ ...productInfo, [name]: value });
  };


  console.log(isvalid);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = sessionStorage.getItem("userId");
    console.log(productInfo);
    axios
      .post("http://localhost:7575/product", {

        userId: userid,
        title: productInfo.title,
        productImage: null,
        quantity: productInfo.quantity,
        price: productInfo.price,
        productRating: 0.0,
        isForRent: productInfo.isForRent,
        category: productInfo.category,
        description: productInfo.description

      })
      .then((response) => {
        console.log(response.data);


        setProductInfo({
          title: "",
          productImage: "",
          quantity: "",
          price: "",
          productRating: "",
          isForRent: "",
          category: "",
        });

        window.location = "/products";


      })
      .catch((error) => {
        alert("Failed to add product. Please try again !")
        console.log(error.response);
      });



  }



  /*Validations*/


  const [titleErr, setTitleErr] = useState(" ");
  function titleValidation() {
    if (productInfo.title === "") {
      setTitleErr("* Invalid title");
      setIsvalid(false);
    }
    else {
      if (!isNaN(productInfo.title)) {
        setTitleErr("Numbers Not allowed");
        setIsvalid(false);
      } else {
        setTitleErr("");
        setIsvalid(true);
      }

    }
  }


  const [descriptionErr, SetDescriptionErr] = useState("");
  function descriptionValidation() {
    if (productInfo.description === "") {
      SetDescriptionErr(" Please Enter Product Description");
      setIsvalid(false);

    } else {
      SetDescriptionErr(" ");
      setIsvalid(true);
    }
  }

  const [priceErr, SetPriceErr] = useState("");
  function priceValidation() {
    if (productInfo.price == " ") {
      SetPriceErr(" Please Enter Price of product");
      setIsvalid(false);

    } else {


      const price_cheak = parseInt(productInfo.price);
      if (price_cheak <= 0) {
        SetPriceErr(" Price of product cannot be 0");
        setIsvalid(false);
      } else {
        SetPriceErr("");
        setIsvalid(true);
      }

    }
  }

  const [submitErr, SetSubmitErr] = useState("");





  const [quantityErr, SetQuantityErr] = useState("");

  // function quantityValidation() {

  //   if (JSON.stringify(productInfo.quantity) === "") {
  //     SetQuantityErr(" Please Enter quantity of product");
  //     setIsvalid(false);

  //   } else {
  //     const quant = parseInt(productInfo.quantity);

  //     if (quant <= 0) {
  //       SetQuantityErr(" quantity of product cannot be 0");
  //       setIsvalid(false);
  //     } else {
  //       SetQuantityErr("");
  //       setIsvalid(true);
  //     }

  //   }
  // }

  const [ratingErr, SetProductRatingErr] = useState("");
  function ratingValidation() {
    if (productInfo.isForRent === " ") {
      SetProductRatingErr(" Please enter ratings");
      setIsvalid(false);

    } else {

      SetProductRatingErr("");
      setIsvalid(true);
    }

  }


  return (
    <div>
      <div className="register-body bg-light" >

        <div className="body-register col-8">
          <div className="container-details-main">
            <div className="card">
              <div className="row" id="details-lable">

                <h3 className="">Add New Product</h3>

                <div className="col-5">
                  <label for="product_title"><span className='required_fields'>*</span>Product Title</label>
                  <input type="text" name="title" placeholder="enter product title" class="form-control"
                    onChange={handleChange} onInput={titleValidation} />
                  <span className="text-danger">{titleErr}</span>
                </div>



                {/* <div className="col-5">
                  <label for="image"><span className='required_fields'>*</span>Product Image</label>
                  <input type="file" name="product_image" class="form-control"
                    onChange={handleChange} />

                </div> */}


                <div className="col-10" id="product_description">
                  <label for="Discription"><span className='required_fields'>*</span>Description</label>

                  <textarea id="description" name="description" rows="4" cols={50} placeholder="enter product description" class="form-control"

                    onInput={descriptionValidation} onChange={handleChange} />


                  {/* <input type="textBox" name="Discription" placeholder="enter product description" class="form-control" 
                  id="product_description"/> */}
                  <span className="text-danger">{descriptionErr}</span>
                </div>

                <div className="col-5">
                  <label for="Quantity">Quantity</label>
                  <input type="text" name="quantity" class="form-control"
                    onChange={handleChange} />
                  <span className="text-danger">{quantityErr}</span>
                </div>

                <div className="col-5">
                  <label for="price"><span className='required_fields'>*</span>Price</label>
                  <input type="text" name="price" placeholder="enter price" class="form-control"
                    onInput={priceValidation} onChange={handleChange} required />
                  <span className="text-danger">{priceErr}</span>
                </div>



                {/* <div className="col-5">
                  <label for="price"><span className='required_fields'>*</span>Product Rating :</label>
                  <input type="text" name="rating" placeholder="enter rating" class="form-control"
                    onInput={ratingValidation} onChange={handleChange} required />
                  <span className="text-danger">{ratingErr}</span>
                </div> */}


                <div className="col-5" id="isForRent-radio">
                  <br></br>

                  <lable for="rent" id="isForRentradioLable">Available For Rent</lable>
                  <br />
                  <input type="radio" name="rent" value="Yes" id="rent" onChange={handleChange} /><span>Yes</span>

                  <input type="radio" name="rent" value="No" id="rent" onChange={handleChange} /><span>No</span>
                  <span className="text-danger"></span>
                </div>



                <div className="col-5 category" id="category">

                  <select name="category" id="category" onChange={handleChange}>
                    <option value="" selected disabled>Select Product Category</option>
                    <option value="FERTILIZER">Fertilizer</option>
                    <option value="PESTICIDE">Pesticide</option>
                    <option value="EQUIPMENT">Equipment</option>
                    <option value="SEED">Seed</option>
                  </select>

                </div>

                {/* <br></br>
                <div className="col-3" id="outOfStock-radio">
               <lable for="outOfStock"id="outOfStocklable">Out Of Stock :</lable>
                    <br/>
                    <input type="radio" name="outOfStock" value="false" id="outOfStock_lable" /><span>Yes</span>
                    <input type="radio" name="outOfStock" value="true"  id="outOfStock_lable" /><span>No</span>
              
                </div>  */}


                <div className="col-4" id="btn-div">
                  <button className="form-control" id="btn-submit" onClick={handleSubmit}>Add Product</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default AddProduct;
















