import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
// import 'normalize.css/normalize.css'
import Apiroute from './routes/Apirouter';
// import Register from './components/Register';
window.addEventListener('load', function() {
	setTimeout(function() {
		// This hides the address bar:
		window.scrollTo(0, 1);
	}, 0);
});
ReactDOM.render(<Apiroute />, document.getElementById('root'));
