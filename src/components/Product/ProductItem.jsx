import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Store";

const ProductItem = props => {
    const product = props.item;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteAndExit = () => {

        dispatch(deleteProduct(product.id));
        navigate("/");
    }

    return (
        <li className="list-item">
            <img src={product.thumbnail} className="image" />
            <div className="details">
                <Link to={`/product/${product.id}`} className="title">{product.title}</Link>
                <div className="description">{product.description}</div>
            </div>
            <div className="options">
                <button type="button" onClick={() => navigate(`/product/edit/${product.id}`)}>Edit</button>
                <button type="button" onClick={deleteAndExit}>Delete</button> 
            </div>
        </li>
    );
}

export default ProductItem;