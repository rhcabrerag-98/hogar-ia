import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { StripeProvider } from '../src/components/StripeProvider';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StripeProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster />
			</QueryClientProvider>
		</StripeProvider>
	</StrictMode>
);
