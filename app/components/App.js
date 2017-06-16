import React from 'react';
import ReactRouter, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Popular from './Popular';
import Battle from './Battle';
import NavBar from './NavBar';
import Results from './Results';

class App extends React.Component {
	render() {
		return ( 
			<div className="l__wrapper">
				<Router>
					<div className="container">
						<NavBar />
						
						<Switch >
							<Route exact path="/" component={ Home } />
							<Route exact path="/battle" component={ Battle } />
							<Route path='/battle/results' component={ Results } />
							<Route path="/popular" component={ Popular } />
							<Route render={() => <h1>Not Found!</h1>} />
						</Switch>

					</div>

				</Router>
			</div>
		)
	}
}

export default App; 