import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './router/Routing';
import user from './store/User/User'

function App() {
	return (
		<div className="app">
			{user.isAuth ? <>navigation</> : ''}
			<Routing/>
		</div>
	);
}

export default App;
