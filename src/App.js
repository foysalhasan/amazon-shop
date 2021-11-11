import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import ReviewOrder from './components/ReviewOrder/ReviewOrder'
import Shop from './components/Shop/Shop'
import SingleProduct from './components/SingleProduct/SingleProduct'
function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Shop></Shop>
					</Route>
					<Route path="/shop">
						<Shop></Shop>
					</Route>
					<Route path="/product/:key">
						<SingleProduct></SingleProduct>
					</Route>
					<Route path="/order-review">
						<ReviewOrder></ReviewOrder>
					</Route>
					<Route path="/placeorder">
						<PlaceOrder></PlaceOrder>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="*">
						<h1 className="text-danger text-center">NOT FOUND !</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
