import ProductViewContainer from "./ProductViewContainer";

const ProductAdd = () => {
    return (
        <ProductViewContainer>
            <h1>Add Product</h1>
            <form className="h-100">
                <div className="col between">
                    <div className="col r-gap">
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Title</label>
                                <input type="text" placeholder=""/>
                            </div>
                            <div className="col w-100">
                                <label>Brand</label>
                                <input type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Category</label>
                                <input type="text" placeholder=""/>
                            </div>
                            <div className="col w-100">
                                <label>Price</label>
                                <input type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Rating</label>
                                <input type="text" placeholder=""/>
                            </div>
                            <div className="col w-100">
                                <label>Discount</label>
                                <input type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="row evenly c-gap">
                            <div className="col w-100">
                                <label>Description</label>
                                <textarea type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row c-gap">
                        <button className="w-100 button-cancel">Cancel</button>
                        <button className="w-100">Add</button>
                    </div>
                </div>
            </form>
        </ProductViewContainer>
    );
}

export default ProductAdd;