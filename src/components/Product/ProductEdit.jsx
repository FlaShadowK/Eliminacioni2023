import ProductViewContainer from "./ProductViewContainer";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../../Store";

const ProductEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const product = useSelector(state => state.products.products.filter(products => products.id == params.id)[0]);
    const dispatch = useDispatch();

    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredBrand, setEnteredBrand] = useState();
    const [enteredCategory, setEnteredCategory] = useState();
    const [enteredPrice, setEnteredPrice] = useState();
    const [enteredRating, setEnteredRating] = useState();
    const [enteredDiscount, setEnteredDiscount] = useState();
    const [enteredDescription, setEnteredDescription] = useState();

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const brandChangeHandler = event => setEnteredBrand(event.target.value);
    const categoryChangeHandler = event => setEnteredCategory(event.target.value);
    const priceChangeHandler = event => setEnteredPrice(event.target.value);
    const ratingChangeHandler = event => setEnteredRating(event.target.value);
    const discountChangeHandler = event => setEnteredDiscount(event.target.value);
    const descriptionChangeHandler = event => setEnteredDescription(event.target.value);

    if (enteredTitle == undefined) setEnteredTitle(product.title);
    if (enteredBrand == undefined) setEnteredBrand(product.brand);
    if (enteredCategory == undefined) setEnteredCategory(product.category);
    if (enteredPrice == undefined) setEnteredPrice(product.price);
    if (enteredRating == undefined) setEnteredRating(product.rating);
    if (enteredDiscount == undefined) setEnteredDiscount(product.discountPercentage);
    if (enteredDescription == undefined) setEnteredDescription(product.description);

    const submitHandler = event => {
        event.preventDefault();
        let edited_product = {
            brand: enteredBrand,
            category: enteredCategory,
            description: enteredDescription,
            discountPercentage: enteredDiscount,
            id: params.id, 
            images : product.images,
            price: enteredPrice,
            rating: enteredRating,
            stock: Math.floor(Math.random() * 500),
            thumbnail: product.thumbnail,
            title: enteredTitle
        }

        dispatch(updateProduct(edited_product));
        navigate("/");
        
    };

    return (
        <ProductViewContainer>
            <h1>{`Edit Product / ${product.title}`}</h1>
            <form className="h-100" onSubmit={submitHandler}>
                <div className="col between">
                    <div className="col r-gap">
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Title</label>
                                <input type="text" defaultValue={product.title} onChange={titleChangeHandler}/>
                            </div>
                            <div className="col w-100">
                                <label>Brand</label>
                                <input type="text" defaultValue={product.brand} onChange={brandChangeHandler}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Category</label>
                                <input type="text" defaultValue={product.category} onChange={categoryChangeHandler}/>
                            </div>
                            <div className="col w-100">
                                <label>Price</label>
                                <input type="text" defaultValue={product.price} onChange={priceChangeHandler}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Rating</label>
                                <input type="text" defaultValue={product.rating} onChange={ratingChangeHandler}/>
                            </div>
                            <div className="col w-100">
                                <label>Discount</label>
                                <input type="text" defaultValue={product.discountPercentage} onChange={discountChangeHandler}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Description</label>
                                <textarea type="text" defaultValue={product.description} onChange={descriptionChangeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="row c-gap">
                        <button className="w-100 button-cancel"  onClick={() => navigate("/")} >Cancel</button>
                        <button className="w-100">Save</button>
                    </div>
                </div>
            </form>
        </ProductViewContainer>
    );
}

export default ProductEdit;