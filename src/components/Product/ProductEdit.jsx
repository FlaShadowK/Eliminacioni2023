import ProductViewContainer from "./ProductViewContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductEdit = () => {
    const params = useParams();
    const product = useSelector(state => state.products.filter(products => products.id == params.id)[0]);

    return (
        <ProductViewContainer>
            <h1>{`Edit Product / ${product.title}`}</h1>
            <form className="h-100">
                <div className="col between">
                    <div className="col r-gap">
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Title</label>
                                <input type="text" defaultValue={product.title}/>
                            </div>
                            <div className="col w-100">
                                <label>Brand</label>
                                <input type="text" defaultValue={product.brand}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Category</label>
                                <input type="text" defaultValue={product.category}/>
                            </div>
                            <div className="col w-100">
                                <label>Price</label>
                                <input type="text" defaultValue={product.price}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Rating</label>
                                <input type="text" defaultValue={product.rating}/>
                            </div>
                            <div className="col w-100">
                                <label>Discount</label>
                                <input type="text" defaultValue={product.discountPercentage}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Description</label>
                                <textarea type="text" defaultValue={product.description}/>
                            </div>
                        </div>
                    </div>
                    <div className="row c-gap">
                        <button className="w-100 button-cancel">Cancel</button>
                        <button className="w-100">Save</button>
                    </div>
                </div>
            </form>
        </ProductViewContainer>
    );
}

export default ProductEdit;