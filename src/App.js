import { ProductListing, ProductDetail, PageNotFound,Header,ProductComponent } from './Components/exportComponents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      <div>
        <Header />
        <ProductComponent />
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route Path='/product/:productId' exact element={<ProductDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
