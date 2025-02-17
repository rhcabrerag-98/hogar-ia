import { Separator } from '../shared/Separator';

const availableBrands = [
	'Ikea',
	'Casaideas',
	'Zara Home',
	'Saga Falabella',
	'Ripley Home',
	'H&M Home',
];

interface Props {
	selectedBrands: string[];
	setSelectedBrands: (brands: string[]) => void;
}

export const ContainerFilter = ({
	selectedBrands,
	setSelectedBrands,
}: Props) => {
	const handleBrandChange = (brand: string) => {
		if (selectedBrands.includes(brand)) {
			setSelectedBrands(selectedBrands.filter(b => b !== brand));
		} else {
			setSelectedBrands([...selectedBrands, brand]);
		}
	};

	return (
		<div className='p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1'>
			<h3 className='font-semibold text-xl mb-4'>Filtros</h3>

			{/* Separador  */}
			<Separator />

			<div className='flex flex-col gap-3'>
				<h3 className='text-lg font-medium text-black'>Marcas</h3>

				<div className='flex flex-col gap-2'>
					{availableBrands.map(brand => (
						<label key={brand} className='inline-flex items-center'>
							<input
								type='checkbox'
								className='text-black border-black focus:ring-black accent-black'
								checked={selectedBrands.includes(brand)}
								onChange={() => handleBrandChange(brand)}
							/>
							<span className='ml-2 text-black text-sm cursor-pointer'>
								{brand}
							</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};
