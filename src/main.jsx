import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './app/store.js';
import Home from './pages/Home.jsx';
import Video from './pages/Video.jsx';
import AddVideo from './pages/AddVideo.jsx';
import './index.css';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/video/:id',
				element: <Video />,
			},
			{
				path: '/add-video/:id',
				element: <AddVideo />,
			},
			{
				path: '/edit-video/:id',
				element: <AddVideo />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);
