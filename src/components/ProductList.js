// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import ProductComponent from "./ProductComponent";
// import { setProducts } from "../redux/actions/ProductAction";
// import "../assets/css/productlist.css";

// const ProductList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   //this will retrieve data from store
//   //  const products = useSelector((state) => state.allProducts.products);
//   //this will create a dispatch obj to send action to reducer
//   const dispatch = useDispatch();
//   const fetchdata = async () => {
//     //axios.get("https://fakestoreapi.com/products").then(response)=>{
//     //     dispatch(setProduct(response.data));
//     // }).catch(()=>{})
//     console.log("in fetchdata fun");
//     const response = await axios
//       .get("http://localhost:7575/product/")
//       .catch((err) => {
//         console.log("error occured,err");
//       });
//     dispatch(setProducts(response.data));
//     console.log(JSON.stringify(response));
//   };
//   const url2 = `http://localhost:7575/product/api/products/search?keyword=${searchTerm}`;
//   const handleSearch = async () => {
//     try {
//         console.log("URL")
//         console.log(url2);
//       // Send a GET request to your API
//       const response = await axios.get(url2);

//       // Check if the response has data
//       if (response && response.data) {
//         // Dispatch the data to your Redux store
//         dispatch(setProducts(response.data));
//         console.log(JSON.stringify(response.data));
//       } else {
//         // Handle the case where the response doesn't have data
//         console.error("Response data is undefined or empty.");
//       }
//     } catch (error) {
//       // Handle any errors that occur during the request
//       console.error("Error occurred while fetching data:", error);
//     }
//   };

//   //as soon as page get loaded in memory, equivalent to componentDidMount
//   useEffect(() => {
//     console.log("in useEffect fun");
//     fetchdata();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <div>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>

//         <div className="col-sm-2">
//           <section id="sidebar">

//             <br></br>
//             <div>
//               <h6 className="p-1 border-bottom">Filter By</h6>
//               <a href="#">Rating</a>
//             </div>
//             <br></br>
//             <div>
//               <h6 className="p-1 border-bottom">Sort by</h6>
//               <ul>
//                 <li>
//                   <a href="#">Low to High</a>
//                 </li>
//                 <li>
//                   <a href="#">High to Low</a>
//                 </li>
//               </ul>
//             </div>
//           </section>
//         </div>
//         <div className="col-sm-10">
//           <ProductComponent />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/ProductAction";
import "../assets/css/productlist.css";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [outOfStock, setOutOfStock] = useState(false);

  const dispatch = useDispatch();

  const fetchdata = async () => {
    console.log("in fetchdata fun");
    const response = await axios.get("http://localhost:7575/product/").catch((err) => {
      console.log("error occurred: ", err);
    });
    dispatch(setProducts(response.data));
    console.log(JSON.stringify(response));
  };

  const handleSearch = async () => {
    try {
      const queryParams = {
        keyword: searchTerm,
        minPrice: minPrice,
        maxPrice: maxPrice,
        category: category,
        outOfStock: outOfStock,
      };

      const queryString = Object.keys(queryParams)
        .map((key) => key + "=" + queryParams[key])
        .join("&");

      const url = `http://localhost:7575/product/api/products/search?${queryString}`;

      console.log("URL:", url);

      const response = await axios.get(url);

      if (response && response.data) {
        dispatch(setProducts(response.data));
        console.log(JSON.stringify(response.data));
      } else {
        console.error("Response data is undefined or empty.");
      }
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("in useEffect fun");
    fetchdata();
  }, []);

  return (
    // <div className="container">
    //   <div className="row">
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //       <input
    //         type="number"
    //         placeholder="Min Price"
    //         value={minPrice}
    //         onChange={(e) => setMinPrice(e.target.value)}
    //       />
    //       <input
    //         type="number"
    //         placeholder="Max Price"
    //         value={maxPrice}
    //         onChange={(e) => setMaxPrice(e.target.value)}
    //       />
    //       <select
    //         value={category}
    //         onChange={(e) => setCategory(e.target.value)}
    //       >
    //         <option value="">Select Category</option>
    //         <option value="Category1">Category 1</option>
    //         <option value="Category2">Category 2</option>
    //         {/* Add more categories as needed */}
    //       </select>
    //       <label>
    //         <input
    //           type="checkbox"
    //           checked={outOfStock}
    //           onChange={(e) => setOutOfStock(e.target.checked)}
    //         />
    //         Out of Stock
    //       </label>
    //       <button onClick={handleSearch}>Search</button>
    //     </div>

    //     <div className="col-sm-2">
    //       <section id="sidebar">
    //         <br />
    //         <div>
    //           <h6 className="p-1 border-bottom">Filter By</h6>
    //           <a href="#">Rating</a>
    //         </div>
    //         <br />
    //         <div>
    //           <h6 className="p-1 border-bottom">Sort by</h6>
    //           <ul>
    //             <li>
    //               <a href="#">Low to High</a>
    //             </li>
    //             <li>
    //               <a href="#">High to Low</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </section>
    //     </div>
    //     <div className="col-sm-10">
    //       <ProductComponent />
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="row">
        {/* <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div> */}

        {/* <div className="col-sm-2">
          <section id="sidebar">
            <div className="category">
              <h6 className="p-1 border-bottom">Category</h6>
              <ul>
                <li>
                  <a href="#">Fertlizer</a>
                </li>
                <li>
                  <a href="#">Pesticide</a>
                </li>
                <li>
                  <a href="#">Equipment</a>
                </li>
                <li>
                  <a href="#">Seeds</a>
                </li>
              </ul>
            </div>
            <br></br>
            <div>
              <h6 className="p-1 border-bottom">Filter By</h6>
              <a href="#">Rating</a>
            </div>
            <br></br>
            <div>
              <h6 className="p-1 border-bottom">Sort by</h6>
              <ul>
                <li>
                  <a href="#">Low to High</a>
                </li>
                <li>
                  <a href="#">High to Low</a>
                </li>
              </ul>
            </div>
          </section>
        </div> */}
        <div className="col-sm-10">
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
