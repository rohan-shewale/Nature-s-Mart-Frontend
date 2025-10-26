import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./market.css";
import { useEffect } from "react";

const Marketmain = () => {
  const expenses = [
    {
      id: 101,
      commodity: "Potato",
      price: 9000,
      pDate: new Date("2023-11-11"),
      market: "Nashik",
      quantity: 100 ,
    },

    {
      id: 102,
      commodity: "Onion",
      price: 200,
      pDate: new Date("2023-11-12"),
      market: "Nashik",
      quantity: 200,
    },

    {
      id: 103,
      commodity: "Cabbage",
      price: 200,
      pDate: new Date("2023-11-13"),
      market: "Pashan",
      quantity: 300,
    },
  ];

  var var_temp = f3(expenses);
  const [expense, setExpense] = useState(var_temp);

  const addExpensehandler = (ip_expense) => {
    var a1 = [...expense, ip_expense];
    a1 = f3(a1);
    setExpense(a1);
  };

  //function for sorting array by price
  function f3(arr) {
    var swapCount = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
      var j = 0;
      while (j <= i - 1) {
        if (Number(arr[j].price) > Number(arr[j + 1].price)) {
          //swapping
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapCount++;
        }
        j++;
      }

      if (swapCount == 0) {
        break;
      }
    }
    return arr;
  }

  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-2"></div>

    //     <div className="col-md-8">
    //       <div className="row ">
    //         <ExpenseForm onAddexpense={addExpensehandler} />

    //         <p></p>

    //         <ExpenseItem element1={expense} />
    //       </div>
    //     </div>

    //     <div className="col-md-2">
    //       <div className=""></div>
    //     </div>
    //   </div>
    //   <p></p>
    // </div>

    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <div className="row ">
            <ExpenseForm onAddexpense={addExpensehandler} />

            <p></p>

            <ExpenseItem element1={expense} />
          </div>
        </div>

        <div className="col-md-2">
          <div className=""></div>
        </div>
      </div>
      <p></p>
    </div>
  );
};
export default Marketmain;
