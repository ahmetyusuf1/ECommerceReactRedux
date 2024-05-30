import { Link } from "react-router-dom";
import { FaCartShopping, FaHouseChimney } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store.basket);
  const totalAmount = state.basket.reduce(
    (total, item) => total + item.amount,
    0
  );
  return (
    <header className="navbar bg-light position-sticky top-0 z-2 py-3">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand d-flex align-items-center gap-1">
          <img
            src="vite.svg"
            width={36}
            height={30}
            className="d-inline-block align-text-top"
          />
          <div className="fs-3">Redux E-Commerce</div>
        </Link>

        <div className="d-flex align-items-center gap-3 fs-5">
          <Link
            to={"/"}
            className="d-flex align-items-center gap-1 text-decoration-none"
          >
            <FaHouseChimney />
            <span>Home Page</span>
          </Link>
          <Link to={"/basket"}>
            <FaCartShopping />
            <span className="badge bg-danger mx-1">{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
