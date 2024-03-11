import StarLogo from "../svgs/StarLogo";
import RupeeLogo from "../svgs/RupeeLogo";
import { useNavigate } from "react-router-dom";

const EachProduct = ({ productDetails }) => {
  const navigate = useNavigate();
  const { title, price, image, category, rating, id } = productDetails;
  const onCliCkItem = () => {
    const data = productDetails;
    navigate(`/details/${id}`, { state: data });
  };
  return (
    <div className="each-product-container" onClick={() => onCliCkItem()}>
      <img src={image} alt={title} />
      <div>
        <p className="each-product-rating">{title}</p>
        <div className="each-product-rating-category-container">
          <p className="each-product-rating">
            <StarLogo />
            <span>{rating?.rate}</span>
          </p>
          <p>{category}</p>
        </div>
        <p className="each-product-rating each-product-price">
          <RupeeLogo />
          <span>{price}</span>
        </p>
      </div>
    </div>
  );
};

export default EachProduct;
