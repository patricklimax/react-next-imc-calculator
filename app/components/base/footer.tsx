import Link from 'next/link';
import { LogoSimboloSmall } from './logo-simbolo';

const Footer = () => {
	return (
		<footer className='flex items-center justify-center gap-1 rounded-md bg-primary/20 px-4 py-6'>
			<p className='text-sm font-bold text-primary'>
				Desenvolvido por Patrick Lima
			</p>
			<Link href={'https://patricklimax.vercel.app'}>
				<LogoSimboloSmall className='w-3' />
			</Link>
		</footer>
	);
};

export default Footer;
