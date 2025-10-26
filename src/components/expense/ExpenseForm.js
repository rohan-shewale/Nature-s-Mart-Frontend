import { useState } from "react";
const ExpenseForm = (props) => {
  const [inputTitle, setinputTitle] = useState("");
  const [inputAmount, setinputAmount] = useState("");
  const [inputDate, setinputDate] = useState("");
  const [inputMarket, setinputMarket] = useState("");
  const [inputQuantity, setinputQuantity] = useState("");

  const submit_handler = (event) => {
    event.preventDefault();
    const expense = {
      id: Math.random().toString(),
      commodity: inputTitle,
      price: inputAmount,
      pDate: new Date(inputDate),
      market: inputMarket,
      quantity: inputQuantity,
    };

    setinputTitle("");
    setinputAmount("");
    setinputDate("");
    setinputMarket("");
    setinputQuantity("");

    props.onAddexpense(expense);
  };

  const title_change = (event) => {
    setinputTitle((pre) => event.target.value);
  };

  const amount_change = (event) => {
    setinputAmount((pre) => event.target.value);
  };

  const date_change = (event) => {
    setinputDate((pre) => event.target.value);
  };

  const market_change = (event) => {
    setinputMarket((pre) => event.target.value);
  };

  const quantity_change = (event) => {
    setinputQuantity((pre) => event.target.value);
  };

  return (
    // <div className="">
    //   <form onSubmit={submit_handler}>
    //     <div className="row">
    //       <div className="col-md-4">
    //         <label>Commodity</label>
    //         <br />
    //         <input onChange={title_change} value={inputTitle} required></input>
    //       </div>

    //       <div className="col-md-4">
    //         <label>Price</label>
    //         <br />
    //         <input
    //           type="number"
    //           onChange={amount_change}
    //           value={inputAmount}
    //           required
    //         />
    //       </div>

    //       <div className="col-md-4">
    //         <label>Date</label>
    //         <br />
    //         <input
    //           type="date"
    //           onChange={date_change}
    //           value={inputDate}
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-md-4">
    //         <label>Market</label>
    //         <br />
    //         <input onChange={market_change} value={inputMarket} required />
    //       </div>

    //       <div className="col-md-4">
    //         <label>Quantity</label>
    //         <br />
    //         <input
    //           type="number"
    //           onChange={quantity_change}
    //           value={inputQuantity}
    //           required
    //         />
    //       </div>

    //       <div className="col-md-4">
    //         <button type="submit" className="btn btn-primary btn-class">
    //           Add new Commodity
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>

    <div className="form-container ">
      <form onSubmit={submit_handler} className="form">
        <div className="row">
          <div className="col-md-4">
            <label>Commodity</label>
            <br />
            <input onChange={title_change} value={inputTitle} required />
          </div>

          <div className="col-md-4 ms-1">
            <label>Price</label>
            <br />
            <input
              type="number"
              onChange={amount_change}
              value={inputAmount}
              required
            />
          </div>

          <div className="col-md-3">
            <label>Date</label>
            <br />
            <input
              type="date"
              onChange={date_change}
              value={inputDate}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4" style={{marginLeft:"150px"}}>
            <label>Market</label>
            <br />
            <input onChange={market_change} value={inputMarket} required />
          </div>

          <div className="col-md-4">
            <label>Quantity</label>
            <br />
            <input
              type="number"
              onChange={quantity_change}
              value={inputQuantity}
              required
            />
          </div>

          <div className="col-md-12 col-sm-6 text-center mt-5" style={{width:"500px",marginLeft:"150px",}}>
            <button type="submit" className="btn btn-primary btn-class ">
              Add new Commodity
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
