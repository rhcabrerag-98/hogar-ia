import { useQueries } from '@tanstack/react-query';
import { getRandomProducts, getRecentProducts } from '../../actions';

export const useHomeProducts = () => {
	const results = useQueries({
		queries: [
			{
				queryKey: ['recentProducts'],
				queryFn: getRecentProducts,
			},
			{
				queryKey: ['popularProducts'],
				queryFn: getRandomProducts,
			},
		],
	});

	const [recentProductsResult, popularProductsResult] = results; // [resultadoQuery1, resultadoQuery2]

	// Combinar los estados de las consultas
	const isLoading =
		recentProductsResult.isLoading || popularProductsResult.isLoading;
	const isError =
		recentProductsResult.isError || popularProductsResult.isError;

	return {
		recentProducts: recentProductsResult.data || [],
		popularProducts: popularProductsResult.data || [],
		isLoading,
		isError,
	};
};
