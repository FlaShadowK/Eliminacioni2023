import Home from "./Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductView from "./components/Product/ProductView";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import ProductAdd from "./components/Product/ProductAdd";  

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>
        <Route path="product/:id" element={<ProductView/>}/>
        <Route path="product">
          <Route path="add" element={<ProductAdd/>}/>
        </Route>
        <Route path="spinnertest" element={<LoadingSpinner/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
