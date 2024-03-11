import useGetData from "../hooks/useGetData";
import EachProduct from "./EachProduct";
import Loader from "./Loader";

const Products = () => {
  const data = useGetData();
  return (
    <div className="products-main-container">
      <h1>Products</h1>
      <div className="products-list-container">
        {data?.length > 0 ? (
          data?.map((eachData) => (
            <EachProduct key={eachData?.id} productDetails={eachData} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Products;
