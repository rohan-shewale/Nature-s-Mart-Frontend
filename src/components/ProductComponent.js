import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { Rating } from "semantic-ui-react";
//import { Grid } from 'semantic-ui-react';
// import { Card } from "react-bootstrap";
import { Card, Image } from "semantic-ui-react";
import '../assets/css/productcomponent.css';
import productImage from '../assets/images/productImage.png';
import { UseSelector } from "react-redux/es/hooks/useSelector";

const ProductComponent = () => {
    //selecting products array from redux store
    const products = useSelector((state) => state.allProducts.products);
    //generate productList
    const renderList = products.map((products) => {
        const { id, title, price, category,productImageUrl } = products;

        return (

            // <div className="col-md-3 row-card">
            //     <Link to={`/products/${id}`} >
            //         <div className="ui link cards">
            //             <Card className="product-card">
            //                 <Image className="product-image" variant="top" src={productImageUrl} alt={productImage} />
            //                 <Card.Content>
            //                     <Card.Header className="product-header" >{title}</Card.Header>
            //                     <Card.Meta className="product-meta">
            //                         <div className="meta-price">₹ {price}</div>
            //                         <div className="meta" style={{ fontSize: "13px", color: "#04560f" }}>{category}</div>
            //                         <Rating icon='star' defaultRating={3} maxRating={4} />
            //                     </Card.Meta>
            //                 </Card.Content>
            //             </Card>
            //         </div>
            //     </Link>
            // </div>

            <div className="col-md-3 row-card">
                <Link to={`/products/${id}`} >
                    <div className="ui link cards">
                        <Card className="product-card">
                            <Image className="product-image" variant="top" src={productImageUrl} alt={title} />
                            <Card.Content>
                                <Card.Header className="product-header" ><h3>{title}</h3></Card.Header>
                                <Card.Meta className="product-meta">
                                    <div className="meta-price">₹ {price}</div>
                                    <div className="meta" style={{ fontSize: "13px", color: "#04560f" }}>{category}</div>
                                    <Rating icon='star' defaultRating={3} maxRating={4} />
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    </div>
                </Link>
            </div>


        )
    });

    return (
        // <div>
        //     <div className="padding-top">
             
        //         <div className="row">
        //             {renderList}
        //         </div>
                
        //     </div>
        // </div>

        <div>
        <div className="padding-top">
         
            <div className="row">
                {renderList}
            </div>
            
        </div>
    </div>
    )


}

export default ProductComponent;