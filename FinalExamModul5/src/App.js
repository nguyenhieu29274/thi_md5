import './App.css';
import ShowProducts from "./component/ShowProducts";
import {BrowserRouter , Routes , Route, useParams } from 'react-router-dom'
import ProductsDetail from "./component/ProductsDetail";
import Add from "./component/Add";
import UpdateProduct from "./component/UpdateProduct";
import Dalete from "./component/Dalete";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ShowProducts />} />
                <Route path="/products/:id" element={<ProductsDetail />} />
                <Route path="/delete-product/:id" element={<Dalete />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
                <Route path="/add-new-product" element={<Add />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;


