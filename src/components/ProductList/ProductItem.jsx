import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = props => {
    const product = props.item;

    return (
        <li className="list-item">
            <img src={product.thumbnail} className="image" />
            <div className="details">
                <Link to={`/product/${product.id}`} className="title">{product.title}</Link>
                <div className="description">{product.description}</div>
            </div>
            <div className="options">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
        </li>
    );
}

export default ProductItem;