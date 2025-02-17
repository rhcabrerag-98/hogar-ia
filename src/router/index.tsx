import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage,
	ProductsPage,
	ProductPage,
	AboutPage,
	LoginPage,
	RegisterPage,
	OrdersUserPage, } from '../pages';

import { ClientLayout } from '../layouts/ClientLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'productos',
				element: <ProductsPage />,
			},
			{
				path: 'productos/:slug',
				element: <ProductPage />,
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'registro',
				element: <RegisterPage />,
			},
			{
				path: 'account',
				element: <ClientLayout />,
				children: [
					{
						path: '',
						element: <Navigate to='/account/pedidos' />,
					},
					{
						path: 'pedidos',
						element: <OrdersUserPage />,
					},
				],
			},
		],
	},
]);
