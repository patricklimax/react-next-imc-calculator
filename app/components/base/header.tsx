import { LayoutListIcon, SquareMousePointerIcon } from 'lucide-react';
import Link from 'next/link';
import { LogoMarca } from './logo-marca';

export const Header = () => {
	return (
		<header className='flex items-center justify-between rounded-md bg-primary px-4 py-6 shadow-md'>
			<LogoMarca />

			<div className='flex items-center gap-6 md:gap-10 text-sm font-semibold'>
				<Link href={'https://patricklimax.vercel.app'}>
					<div className='flex items-center gap-1 text-background transition-all duration-300 hover:text-background/80'>
						<LayoutListIcon
							size={24}
							className='text-background/30 hidden md:block'
						/>
						<span>Portfólio</span>
					</div>
				</Link>

				<Link href={'https://patricklimax.vercel.app/projects'}>
					<div className='flex items-center gap-1 text-background transition-all duration-300 hover:text-background/80'>
						<SquareMousePointerIcon
							size={24}
							className='text-background/30 hidden md:block'
						/>
						<span>+Aplicações</span>
					</div>
				</Link>
			</div>
		</header>
	);
};
