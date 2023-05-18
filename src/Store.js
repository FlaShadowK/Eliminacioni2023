import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const dummy_items = await fetch("https://dummyjson.com/products").then((res) =>
  res.json()
);

let dami = {dummy_items, loading : 0}

const productSlice = createSlice({
  name: "items",
  initialState: dummy_items,
  reducers: {
    addProduct: (state, action) => {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...action.payload,
        }),
      }).then((res) => res.json());

      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state, action) => {
      fetch(`https://dummyjson.com/products/${action.payload}`, {
        method: "DELETE",
      }).then((res) => res.json());

      state.products = state.products.filter(
        (product) => product.id != action.payload
      );
    },
    updateProduct: (state, action) => {
      fetch(`https://dummyjson.com/products/${action.payload.id}`, {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...action.payload
        }),
      }).then((res) => res.json());

      const targetIndex = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      state.products[targetIndex] = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

export const items = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

items.subscribe(() => console.log(items.getState()));

const test_item = {
  brand: "test",
  category: "test",
  description: "test",
  discountPercentage: "test",
  id: 10,
  images: ["test", "test"],
  price: "test",
  raing: "test",
  stock: "test",
  thumbnail: "test",
  title: "test",
};

// items.dispatch(addProduct(test_item));
// items.dispatch(deleteProduct(1));
// items.dispatch(deleteProduct(6));
// items.dispatch(updateProduct(test_item));

export default items;
