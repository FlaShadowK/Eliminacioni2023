import "./ProductViewContainer.css";
import BackButton from "../UI/BackButton/BackButton";

const ProductViewContainer = (props) => {
  return (
    <>
      <BackButton/>
      <div className="center">
        <div className="content">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default ProductViewContainer;
