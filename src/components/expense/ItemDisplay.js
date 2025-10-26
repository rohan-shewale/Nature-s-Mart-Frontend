const ItemDisplay = (props) => {
  return (
    <tr>
      <td>{props.data.pDate.toLocaleDateString()}</td>
      <td>{props.data.market}</td>
      <td>{props.data.commodity}</td>
      <td>{props.data.quantity}</td>
      <td>{props.data.price}</td>
    </tr>
  );
};

export default ItemDisplay;
