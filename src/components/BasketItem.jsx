import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions/basketActions";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 mb-5 bg-white text-dark d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <img src={item.image} width={90} height={90} />
        <h4>
          <span>{item.make}</span>
          <span>{item.model}</span>
        </h4>
        <h4 className="text-success">{item.price} $</h4>
      </div>
      <div className="d-flex align-items-center gap-4">
        <span>Amount: {item.amount}</span>
        <div className="d-flex gap-2">
          <button
            onClick={() => dispatch(updateItem(item))}
            className="btn btn-primary d-flex justify-content-center align-items-center py-2 rounded-4"
          >
            <FaPlus />
          </button>
          <button
            onClick={() => dispatch(deleteItem(item.id))}
            className="btn btn-danger d-flex justify-content-center align-items-center py-2 rounded-4"
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
