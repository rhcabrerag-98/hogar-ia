export const AboutPage = () => {
	return (
		<div className='space-y-5'>
			<h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
				Nuestra empresa
			</h1>

			<img
				src='https://planner5d.com/blog/content/images/size/w2000/2024/06/maximalismo.1.jpg'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>

			<div className='flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800'>
				<p>
				Hogar.Ia es una tienda en línea especializada en la venta de artículos para el hogar, fundada en 02/2025. Nuestro objetivo es ofrecer a nuestros clientes productos de alta calidad al mejor precio. Contamos con un equipo de expertos que selecciona cuidadosamente cada artículo para brindarte las mejores opciones y hacer de tu hogar un espacio más cómodo y funcional.
				</p>

				<p>
				En Hogar.Ia podrás encontrar una amplia variedad de artículos para el hogar de las mejores marcas. Además, contamos con promociones y descuentos exclusivos para que equipes tu hogar con productos de calidad al mejor precio.
				</p>

				<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
				¡No esperes más y equípate con lo mejor para tu hogar en Hogar.IA!
				</h2>

				<p>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico: <a href='mailto:rhcabrerag@outlook.com'>
					rhcabrerag@outlook.com
					</a>{' '}
					o llamado al <a href='https://w.app/0net7h'>988644257</a>
				</p>
			</div>
		</div>
	);
};
