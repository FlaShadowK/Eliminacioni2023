import BackButton from "../UI/BackButton";

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
