import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './router/Routing';
import user from './store/User/User'
import Navigation from './components/Navigation';

function App() {
	return (
		<div className="app">
			{user.isAuth ? <Navigation/> : ''}
			<Routing/>
		</div>
	);
}

export default App;
