import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import ProductListContainer from "./components/Product/ProductListContainer";
import ProductItem from "./components/Product/ProductItem"; 

function Home() {
  const products = useSelector(state => state.products.products);
  let length = products.length;

  let displayCount;
  if (length > 9){
    displayCount = 9;
  }
  else {
    displayCount = length;
  }

  const [visible, setVisible] = useState(displayCount);

  const loadMore = () => {
    setVisible(prevState => {
      if (prevState + 9 <= length){
        return prevState + 9;
      }
      else{
        return prevState = length;
      }
    });
  }

  const isLoading = () => {
    if(length == 0){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <>
      {isLoading() ? <LoadingSpinner /> : 
        <ProductListContainer>
          {products.slice(0).reverse().slice(0, visible).map(product => (
            <ProductItem key={product.id} item={product}/>
          ))}
          <li>
            {visible >= length ? null  : <button onClick={loadMore}>Load more</button>}
            <div className="nesto">{`${visible} of ${length}`}</div>
          </li>
        </ProductListContainer>}
    </>
  )
}

export default Home
