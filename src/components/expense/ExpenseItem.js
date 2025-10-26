import ItemDisplay from "./ItemDisplay";

const ExpenseItem = (props) => {
  return (
    // <div>
    //   <div className="row">
    //     <table className="table table-striped col-12 text-center">
    //       <tr className="">
    //         <th>Date</th>
    //         <th>Market</th>
    //         <th>Commodity</th>
    //         <th>Quantity</th>
    //         <th>Price</th>
    //       </tr>
    //       <tbody>
    //         {props.element1.map((item1) => {
    //           return <ItemDisplay data={item1} />;
    //         })}
    //       </tbody>
    //     </table>
    //   </div>

    //   <div className="row">
    //     <div className="col-md-12 "></div>
    //   </div>
    // </div>

    <div>
      <div className="row mt-5">
        <div className="table-container">
          <table className="table table-striped col-12 text-center">
            <thead>
              <tr>
                <th>Date</th>
                <th>Market</th>
                <th>Commodity</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {props.element1.map((item1) => {
                return <ItemDisplay data={item1} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
