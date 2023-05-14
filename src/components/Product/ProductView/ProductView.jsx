import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductView.css";
import ProductViewContainer from "./ProductViewContainer";

const ProductView = () => {
    const params = useParams();
    console.log(params.id);

    const product = useSelector(state => state.products.filter(products => products.id == params.id)[0]);
    console.log(product);
    return (
        <ProductViewContainer>
            <div className="row">
                <img src={product.thumbnail} alt="" className="thumbnail" />
                <div className="title">{product.title}</div>
            </div>
            <div className={"row evenly"}>
                {product.images.map((image, index)=>(
                    <img key={index} src={image} className="image" />
                ))}
            </div>
        </ProductViewContainer>
    );
};

export default ProductView;