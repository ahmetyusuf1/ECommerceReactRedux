import { useSelector } from "react-redux";

const Error = () => {
  const state = useSelector((store) => store.product);
  return <p className="text-center fs-2 my-5">Error! {state.isError}</p>;
};

export default Error;
