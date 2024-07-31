import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../Helpers/helper";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div>
      <img src={image} alt={data.title} />
      <p>{shortenText(title)}</p>
      <div>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        {!!quantity && <span>{quantity}</span>}
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
