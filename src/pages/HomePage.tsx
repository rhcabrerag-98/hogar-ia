import { Brands } from '../components/home/Brands';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import {
	popularProductos,
	recentProductos,
} from '../data/initialData';
import { prepareProducts } from '../helpers';

export const HomePage = () => {
	const preparedRecentProducts = prepareProducts(recentProductos);
	const preparedPopularProducts = prepareProducts(popularProductos);

	return (
		<div>
			<FeatureGrid />

			<ProductGrid
				title='Nuevos Productos'
				products={preparedRecentProducts}
			/>

			<ProductGrid
				title='Productos Destacados'
				products={preparedPopularProducts}
			/>

			<Brands />
		</div>
	);
};
