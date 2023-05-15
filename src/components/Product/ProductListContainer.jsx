
const ProductListContainer = (props) => {
  return (
    <div className="list-container">
      <ul className="list">
        <li>
          <h1>Products</h1>
        </li>
        {props.children}
      </ul>
    </div>
  );
};

export default ProductListContainer;
