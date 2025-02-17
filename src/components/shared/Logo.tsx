import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link
			to='/'
			className={`text-2xl font-bold tracking-tighter transition-all`}
		>
			<p className='lg:block'>
				Hogar.
				<span className='text-green-400'>IA</span>
			</p>
		</Link>
	);
};
