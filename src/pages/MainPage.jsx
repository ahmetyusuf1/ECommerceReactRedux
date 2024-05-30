import { getProducts } from "../redux/actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBasket());
  }, []);

  return (
    <div>
      {state.isLoading && <Loading />}
      {state.isError && <Error />}
      <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
        {state.products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
