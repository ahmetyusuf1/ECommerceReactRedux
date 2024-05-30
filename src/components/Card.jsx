import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const found = state.basket.find((item) => item.id === product.id);

  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };
  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center">
          <img src={product.image} width={200} height={200} />
        </div>
        <div className="card-body">
          <h5 className="text-center">{product.title}</h5>
          <p className="d-flex justify-content-center gap-1">
            <span className="fw-bold">{product.make}</span>
            <span>{product.model}</span>
          </p>
          <p className="d-flex flex-column align-items-center">
            {product.specs.map((spec, i) => (
              <span key={i}>{spec}</span>
            ))}
          </p>
          <div className="d-flex justify-content-center">
            <button onClick={handleClick} className="btn btn-primary">
              {found ? `Increase Quantity (${found.amount})` : "Add to Basket"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
