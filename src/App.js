import { Header } from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProductListing } from './Components/ProductsListing';
import { ProductDetail } from './Components/ProductDetail';



function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route Path='/product/:productId' exact component={ProductDetail} />
          <Route>404 Page Not Found!</Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
