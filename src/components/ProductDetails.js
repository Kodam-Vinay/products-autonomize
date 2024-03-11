import { useLocation } from "react-router-dom";
import RupeeLogo from "../svgs/RupeeLogo";
import StarLogo from "../svgs/StarLogo";

const ProductDetails = () => {
  const { state } = useLocation();
  const { image, title, rating, category, price, description } = state;
  return (
    <div className=" products-main-container">
      <h1>Product Info</h1>
      <div className="product-details-container">
        <img src={image} alt={title} />
        <div className="products-text-details-container">
          <p className="each-product-rating product-details-title">{title}</p>
          <div className="product-details-rating-category-container">
            <p className="each-product-rating">
              <StarLogo />
              <span>{rating?.rate}</span>
            </p>
            <p>{category}</p>
          </div>
          <p className="each-product-price product-details-price-container each-product-rating">
            <span>Price : </span>
            <RupeeLogo />
            <span>{price}</span>
          </p>
          <p className="product-details-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
