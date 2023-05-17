import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductViewContainer from "./ProductViewContainer";

const ProductView = () => {
    const params = useParams();
    console.log(params.id);

    const product = useSelector(state => state.products.products.filter(products => products.id == params.id)[0]);
    console.log(product);
    return (
        <ProductViewContainer>
            <div className="row c-gap between">
                <div className="row c-gap">
                    <img src={product.thumbnail} alt="" className="pthumbnail" />
                    <div className="col">
                        <div className="pcategory">{`products ᐅ ${product.category}`}</div>
                        <h1 className="ptitle">{product.title}</h1>
                        <h2 className="pbrand">{product.brand}</h2>
                        <h3 className="prating">{product.rating}</h3>
                        <h2 className="pprice">{`${product.price}€`}</h2>
                        <div className="pstock">{`In stock: ${product.stock}`}</div>
                    </div>
                </div>
                <div style={{width: "auto"}} className="row c-gap end bottom">
                    <button className="pbutton" type="button">Edit</button>
                    <button className="pbutton" type="button">Delete</button>
                </div>
            </div>
            <div className={"row evenly pimage-container"}>
                {product.images.map((image, index)=>(
                    <img key={index} src={image} className="pimage" />
                ))}
            </div>
            <div className="col r-gap">
                <h3 className="">Description:</h3>
                <div className="pdescription">{product.description}</div>
            </div>
        </ProductViewContainer>
    );
};

export default ProductView;