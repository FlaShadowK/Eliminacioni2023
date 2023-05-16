import { Link } from "react-router-dom";

const ProductListContainer = (props) => {
  return (
    <div className="list-container">
      <ul className="list">
        <li>
          <h1>Products</h1>
        </li>
        <li>
          <Link to="/product/add"><button>Add Item</button></Link>
        </li>
        {props.children}
      </ul>
    </div>
  );
};

export default ProductListContainer;
