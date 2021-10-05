import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ListView} from "./views/list-view";
import {NotFound} from "./views/notfound";
import {DetailView} from "./views/detail-view";
import {SiteHeader} from "./components/site-header";
import {WishlistContextProvider} from "./WishlistContextProvider";

function App() {
	return (
		<BrowserRouter>
			<WishlistContextProvider>
				<SiteHeader />
				<Switch>
					<Route path="/" component={ListView} exact />
					<Route path="/list/:animalType" component={ListView} />
					<Route path="/list" component={ListView} exact />
					<Route path="/detail/:id" component={DetailView}/>
					<Route component={NotFound}/>
				</Switch>
			</WishlistContextProvider>
		</BrowserRouter>
	);
}

export default App;