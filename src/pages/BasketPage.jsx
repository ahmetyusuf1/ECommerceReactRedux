import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../redux/actions/basketActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  const totalPrice = state.basket.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  return (
    <div className="row p-5">
      {state.isLoading && <Loading />}
      {state.isLoading && <Error />}
      <div className="col-md-8">
        {state.basket.map((item, i) => (
          <BasketItem key={i} item={item} />
        ))}
      </div>
      <div className="col-md-4">
        <div className="bg-white text-dark p-5 d-flex flex-column justify-content-center align-items-center gap-4">
          <h3>Total Price: {totalPrice} $</h3>
          <button className="btn btn-outline-success">Complete Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
