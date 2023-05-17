import ProductViewContainer from "./ProductViewContainer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Store";

const ProductAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nextId = useSelector(state => {
        let length = state.products.products.length;
        return state.products.products[length - 1].id + 1;
    });

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

    const submitHandler = event => {
        event.preventDefault();
        let new_product = {
            id: nextId,
            brand: enteredBrand,
            category: enteredCategory,
            description: enteredDescription,
            discountPercentage: enteredDiscount,      
            images : [
                `https://place-hold.it/500x300/aaa/red&text=${enteredTitle}&fontsize=20`,
                `https://place-hold.it/500x300/aaa/green&text=${enteredTitle}&fontsize=20`,
                `https://place-hold.it/500x300/aaa/blue&text=${enteredTitle}&fontsize=20`,
                `https://place-hold.it/500x300/aaa/red&text=${enteredTitle}&fontsize=20`,
                `https://place-hold.it/500x300/aaa/green&text=${enteredTitle}&fontsize=20`,
                `https://place-hold.it/500x300/aaa/blue&text=${enteredTitle}&fontsize=20`
            ],
            price: enteredPrice,
            rating: enteredRating,
            stock: Math.floor(Math.random() * 500),
            thumbnail: `https://place-hold.it/500x300/aaa/red&text=${enteredTitle}&fontsize=20`,
            title: enteredTitle,
        }

        dispatch(addProduct(new_product));
        navigate("/");
        
    };


    return (
        <ProductViewContainer>
            <h1>Add Product</h1>
            <form onSubmit={submitHandler} className="h-100">
                <div className="col between">
                    <div className="col r-gap">
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Title</label>
                                <input type="text" placeholder="" onChange={titleChangeHandler}/>
                            </div>
                            <div className="col w-100">
                                <label>Brand</label>
                                <input type="text" placeholder="" onChange={brandChangeHandler}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Category</label>
                                <input type="text" placeholder="" onChange={categoryChangeHandler}/>
                            </div>
                            <div className="col w-100">
                                <label>Price</label>
                                <input type="number" min="0" placeholder="" onChange={priceChangeHandler}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Rating</label>
                                <input type="number" min="0" max="5" step="0.5" placeholder="" onChange={ratingChangeHandler}/>
                            </div>
                            <div className="col w-100">
                                <label>Discount</label>
                                <input type="number" min="0" max="100" placeholder="" onChange={discountChangeHandler}/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Description</label>
                                <textarea type="text" onChange={descriptionChangeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="row c-gap">
                        <button type="button" className="w-100 button-cancel" onClick={() => navigate("/")}>Cancel</button>
                        <button type="submit" className="w-100">Add</button>
                    </div>
                </div>
            </form>
        </ProductViewContainer>
    );
}

export default ProductAdd;