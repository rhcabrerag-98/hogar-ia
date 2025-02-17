const brands = [
	{
		image: '/img/brands/ikea-logo.png',
		alt: 'Ikea',
	},
	{
		image: '/img/brands/casa-ideas-logo.jpg',
		alt: 'Casa Ideas',
	},
	{
		image: '/img/brands/zara-home-logo.jpg',
		alt: 'Zara Home',
	},
	{
		image: '/img/brands/falabella-peru.jpg',
		alt: 'Falabella',
	},
	{
		image: '/img/brands/ripley-home.jpg',
		alt: 'Ripley Home',
	},

	{
		image: '/img/brands/hm-home-logo.png',
		alt: 'H&M Home',
	},
];

export const Brands = () => {
	return (
		<div className='flex flex-col items-center gap-3 pt-16 pb-12'>
			<h2 className='font-bold text-2xl'>Marcas que disponemos</h2>

			<p className='w-2/3 text-center text-sm md:text-base'>
				Tenemos lo más moderno en tecnología y los últimos modelos de
				decoraciones disponibles
			</p>

			<div className='grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6'>
				{brands.map((brand, index) => (
					<div key={index}>
						<img src={brand.image} alt={brand.alt} />
					</div>
				))}
			</div>
		</div>
	);
};
